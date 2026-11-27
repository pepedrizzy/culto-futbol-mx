// Culto Fútbol MX — motor: jugadores, precios, fuerza de equipo y simulación de partido.
(function (G) {
  const PRESUPUESTO = 120; // millones
  const FORMACIONES = {
    "4-3-3": ["POR","DEF","DEF","DEF","DEF","MED","MED","MED","DEL","DEL","DEL"],
    "4-4-2": ["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","DEL","DEL"],
    "4-2-3-1": ["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL"],
    "3-5-2": ["POR","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL","DEL"],
    "5-3-2": ["POR","DEF","DEF","DEF","DEF","DEF","MED","MED","MED","DEL","DEL"],
    "3-4-3": ["POR","DEF","DEF","DEF","MED","MED","MED","MED","DEL","DEL","DEL"],
    "4-1-4-1": ["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL"],
    "4-1-2-1-2": ["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","DEL","DEL"],
    "3-4-2-1": ["POR","DEF","DEF","DEF","MED","MED","MED","MED","MED","MED","DEL"]
  };
  const ESTILOS = {
    at: { nombre: "Atajador", m: { POR: 0, DEF: -45, CRE: -40, ATQ: -60, VEL: -40, FIS: -20 } },
    mu: { nombre: "Muro", m: { DEF: 2, FIS: 1, VEL: -6, CRE: -12, ATQ: -25, POR: -70 } },
    la: { nombre: "Lateral", m: { DEF: -3, VEL: 3, CRE: -5, FIS: -4, ATQ: -15, POR: -70 } },
    co: { nombre: "Contención", m: { DEF: -2, CRE: -2, FIS: 1, VEL: -8, ATQ: -14, POR: -70 } },
    cr: { nombre: "Creativo", m: { CRE: 3, ATQ: -4, VEL: -4, DEF: -20, FIS: -10, POR: -70 } },
    ll: { nombre: "Llegador", m: { ATQ: -2, VEL: 2, CRE: -2, DEF: -15, FIS: -6, POR: -70 } },
    g:  { nombre: "Goleador", m: { ATQ: 3, VEL: -4, CRE: -12, FIS: -2, DEF: -40, POR: -70 } },
    v:  { nombre: "Veloz", m: { ATQ: -1, VEL: 4, CRE: -8, FIS: -8, DEF: -40, POR: -70 } },
    c:  { nombre: "Completo", m: { ATQ: 0, CRE: -3, VEL: -3, FIS: -3, DEF: -35, POR: -70 } }
  };
  const ATTRS = ["ATQ","CRE","DEF","VEL","FIS","POR"];

  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  function precio(ovr) { return Math.round((2 + 0.0146 * Math.pow(Math.max(0, ovr - 65), 2.2)) * 2) / 2; }

  let carMap = null;
  function CAR() {
    if (!carMap) { carMap = {}; const R = G.CULTO_CARACTER_RAW || {}; Object.keys(R).forEach(k => R[k].split(";").forEach(n => carMap[n] = +k)); }
    return carMap;
  }
  let paisMap = null;
  function PAIS() {
    if (!paisMap) { paisMap = {}; const R = G.CULTO_PAIS_RAW || {}; Object.keys(R).forEach(k => R[k].split(";").forEach(n => paisMap[n] = k)); }
    return paisMap;
  }
  function cargar(raw) {
    return raw.trim().split("\n").map(l => {
      const [nombre, pos, club, era, ovr, estilo, apodo] = l.split("|");
      const o = +ovr, h = hash(nombre), a = {};
      ATTRS.forEach((k, i) => { a[k] = clamp(o + (ESTILOS[estilo].m[k] || 0) + (((h >>> (i * 4)) & 7) - 3), 15, 99); });
      const id = nombre.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return { id, nombre, apodo: apodo || "", pos, club, era: era + "s", ovr: o, estilo, a, precio: precio(o), pais: PAIS()[nombre] || "MX", car: CAR()[nombre] || 3 };
    });
  }

  // Valor efectivo de un jugador en la línea donde lo pusiste
  function enLinea(p, linea) {
    const pen = p.pos === linea ? 0 : (p.pos === "POR" || linea === "POR") ? 40 : 12;
    const a = {}; ATTRS.forEach(k => a[k] = p.a[k] - pen); return a;
  }

  // Química (máx. 12) en cuatro partes de 3 puntos: Club, Selección, Tipo de juego y Variedad.
  // Está pensada para premiar la mezcla: un 11 de un solo club se queda corto.
  const QUIM_MAX = 12, PARTE_MAX = 3;
  const PARTES = { club: "Club", sel: "Selección", juego: "Tipo de juego", variedad: "Variedad" };
  function quimicaDetalle(jugadores, motor = MOTOR) {
    const det = [], partes = { club: 0, sel: 0, juego: 0, variedad: 0 };
    const add = (parte, txt, pts) => { if (pts > 0) { det.push({ parte, txt, pts }); partes[parte] += pts; } };
    const club = {}, era = {}, pais = {};
    jugadores.forEach(p => {
      club[p.club] = (club[p.club] || 0) + 1; era[p.era] = 1;
      (pais[p.pais] = pais[p.pais] || new Set()).add(p.club);
    });
    // Club: parejas del mismo club. Más de 3 de un club ya no suman.
    Object.entries(club).forEach(([k, n]) => { if (n >= 2) add("club", `${n} de ${k}`, Math.min(n - 1, 2)); });
    // Selección: compatriotas que vienen de clubes distintos
    Object.entries(pais).forEach(([k, s]) => { if (s.size >= 2) add("sel", `${PAIS_NOM[k] || k} de ${s.size} clubes`, Math.min(s.size - 1, 2) * 0.75); });
    // Tipo de juego: un 11 bien armado
    const est = e => jugadores.filter(p => p.estilo === e).length;
    if (est("cr") && est("g")) add("juego", "creativo que surte a un goleador", 0.75);
    if (est("co")) add("juego", "contención que equilibra", 0.75);
    if (est("mu")) add("juego", "central que manda atrás", 0.75);
    if (est("la") + est("ll") + est("v") >= 2) add("juego", "velocidad por las bandas", 0.75);
    // Variedad: muchos clubes y varias épocas
    const nc = Object.keys(club).length, ne = Object.keys(era).length;
    if (nc >= 5) add("variedad", `${nc} clubes distintos`, nc >= (motor >= 3 ? 8 : 9) ? 2 : nc >= 7 ? 1.5 : 1);
    if (ne >= 3) add("variedad", `${ne} épocas distintas`, ne >= 4 ? 1 : 0.5);
    let total = 0;
    Object.keys(partes).forEach(k => { partes[k] = Math.min(PARTE_MAX, partes[k]); total += partes[k]; });
    det.sort((a, b) => b.pts - a.pts);
    return { total: Math.round(total * 10) / 10, partes, det };
  }
  const PAIS_NOM = { MX: "Mexicanos", AR: "Argentinos", UY: "Uruguayos", CL: "Chilenos", CO: "Colombianos", EC: "Ecuatorianos", PY: "Paraguayos", BR: "Brasileños", PE: "Peruanos", VE: "Venezolanos", ES: "Españoles", FR: "Franceses", US: "Estadounidenses", PT: "Portugueses", NL: "Neerlandeses", GR: "Griegos", MA: "Marroquíes", CR: "Costarricenses", PA: "Panameños", HN: "Hondureños", CM: "Cameruneses", ZM: "Zambianos", CV: "Caboverdianos" };
  const bandera = c => String.fromCodePoint(...[...c].map(x => 127397 + x.charCodeAt(0)));
  function quimica(jugadores, motor) { return quimicaDetalle(jugadores, motor).total; }

  // equipo: { formacion, xi: [ids] } ; mapa: id -> jugador
  // Versión del motor: cada torneo guarda la suya para que su historial nunca cambie.
  // 2 = primera versión · 3 = formaciones más parejas (posesión menos decisiva)
  const MOTOR = 3;
  function fuerza(equipo, mapa, motor = MOTOR) {
    const f = FORMACIONES[equipo.formacion] || FORMACIONES["4-3-3"];
    const js = (equipo.xi || []).map(id => mapa[id]).filter(Boolean);
    if (js.length < 11 || (equipo.xi || []).length !== 11) return null;
    const W = { atq: { DEF: 0.1, MED: 0.4, DEL: 1 }, ctl: { DEF: 0.3, MED: 1, DEL: 0.3 }, def: { DEF: 1, MED: 0.35, DEL: 0.05 } };
    const BASE = { atq: 4.6, ctl: 5.1, def: 5.2 };
    const acc = { atq: [0, 0], ctl: [0, 0], def: [0, 0] };
    let por = 0;
    const roles = [];
    equipo.xi.forEach((id, i) => {
      const linea = f[i], p = mapa[id], a = enLinea(p, linea);
      const v = {
        atq: 0.65 * a.ATQ + 0.2 * a.VEL + 0.15 * a.FIS,
        ctl: 0.7 * a.CRE + 0.15 * a.VEL + 0.15 * a.FIS,
        def: 0.6 * a.DEF + 0.25 * a.FIS + 0.15 * a.VEL
      };
      // Carácter: los calientes juegan con más intensidad (y luego arriesgan tarjetas)
      const garra = ((p.car || 3) - 3) * 0.7;
      v.atq += garra; v.ctl += garra * 0.5; v.def += garra;
      if (linea === "POR") por = a.POR;
      else for (const k in acc) { acc[k][0] += W[k][linea] * v[k]; acc[k][1] += W[k][linea]; }
      roles.push({ p, linea, a });
    });
    const q = quimica(js, motor), mult = 1 + q / 100;
    const porUnidad = motor >= 3 ? 2 : 3;
    const linea = k => (acc[k][0] / acc[k][1] + porUnidad * (acc[k][1] - BASE[k])) * mult;
    return {
      ataque: linea("atq"), medio: linea("ctl"), defensa: linea("def"),
      porteria: por * mult, quimica: q, roles, motor,
      media: Math.round(js.reduce((s, p) => s + p.ovr, 0) / 11),
      costo: js.reduce((s, p) => s + p.precio, 0)
    };
  }

  function pick(lista, peso, r) {
    const ws = lista.map(peso), tot = ws.reduce((s, w) => s + w, 0);
    let x = r() * tot; for (let i = 0; i < lista.length; i++) { x -= ws[i]; if (x <= 0) return lista[i]; } return lista[lista.length - 1];
  }

  // Simula un partido; seed hace el resultado reproducible.
  // Además de llegadas, hay faltas: amarillas, rojas (el equipo se queda con uno menos) y penales.
  const FALTA = 0.26, AMARILLA = 0.36, ROJA_DIRECTA = 0.012, PENAL = { DEF: 0.075, MED: 0.025, DEL: 0 }, MENOS = 0.08;
  function simular(A, B, seed) {
    const r = rng(seed), ev = [], gol = [0, 0], tiros = [0, 0], pos = [0, 0], tarjetas = [[0, 0], [0, 0]];
    const T = [A, B], JUG = 24, fuera = [new Set(), new Set()], amar = [{}, {}], menos = [0, 0];
    const k = i => 1 - MENOS * menos[i], DIV = (A.motor || MOTOR) >= 3 ? 16 : 9;
    const vivos = (i, f) => T[i].roles.filter(x => !fuera[i].has(x.p.id) && (!f || f(x)));
    for (let i = 0; i < JUG; i++) {
      const min = Math.min(90, Math.floor((i + r()) / JUG * 90) + 1);
      const pA = 1 / (1 + Math.exp(-(A.medio * k(0) - B.medio * k(1)) / DIV));
      const at = r() < pA ? 0 : 1, df = 1 - at, X = T[at], Y = T[df];
      pos[at]++;
      // ¿El que defiende corta la jugada con falta?
      if (r() < FALTA) {
        const infr = pick(vivos(df, x => x.linea !== "POR"), x => (x.linea === "DEF" ? 1 : x.linea === "MED" ? 0.8 : 0.25) * Math.pow((x.p.car || 3) / 3, 1.6), r);
        const c = infr.p.car || 3, rc = r();
        let tarjeta = null;
        if (rc < ROJA_DIRECTA * Math.pow(c / 3, 2)) tarjeta = "roja";
        else if (rc < AMARILLA * (0.55 + 0.15 * c)) tarjeta = amar[df][infr.p.id] ? "roja2" : "amarilla";
        if (tarjeta === "amarilla") { amar[df][infr.p.id] = 1; tarjetas[df][0]++; ev.push({ min, eq: df, tipo: "amarilla", j: infr.p.nombre, jid: infr.p.id }); }
        if (tarjeta === "roja" || tarjeta === "roja2") {
          fuera[df].add(infr.p.id); menos[df]++; tarjetas[df][1]++;
          ev.push({ min, eq: df, tipo: "roja", doble: tarjeta === "roja2", j: infr.p.nombre, jid: infr.p.id });
        }
        if (r() < PENAL[infr.linea]) {
          const cobra = vivos(at, x => x.linea !== "POR").sort((a, b) => b.a.ATQ - a.a.ATQ || (a.p.id < b.p.id ? -1 : 1))[0];
          const portero = Y.roles.find(x => x.linea === "POR");
          tiros[at]++;
          const pPen = clamp(0.76 + (cobra.a.ATQ - portero.a.POR) / 160 - ((cobra.p.car || 3) - 3) * 0.02, 0.6, 0.9);
          const x = r();
          if (x < pPen) { gol[at]++; ev.push({ min, eq: at, tipo: "gol", pen: true, j: cobra.p.nombre, jid: cobra.p.id, por: infr.p.nombre }); }
          else ev.push({ min, eq: at, tipo: x < pPen + (1 - pPen) * 0.65 ? "penalatajado" : "penalfallado", j: cobra.p.nombre, jid: cobra.p.id, por: portero.p.nombre, porid: portero.p.id });
          continue;
        }
        // Tiro libre: la jugada sigue
      }
      const pOc = clamp(0.42 + (X.ataque * k(at) - Y.defensa * k(df)) / 55, 0.15, 0.7);
      if (r() > pOc) continue;
      tiros[at]++;
      const tirador = pick(vivos(at, x => x.linea !== "POR"), x => Math.pow(Math.max(5, x.a.ATQ), 3) * (x.linea === "DEL" ? 1 : x.linea === "MED" ? 0.45 : 0.1), r);
      const pGol = clamp(0.29 + (tirador.a.ATQ * 0.5 + X.ataque * k(at) * 0.5 - Y.porteria) / 80, 0.1, 0.55);
      const portero = Y.roles.find(x => x.linea === "POR");
      const x = r();
      if (x < pGol) {
        gol[at]++;
        const opc = vivos(at, y => y.linea !== "POR" && y !== tirador);
        const asis = r() < 0.75 ? pick(opc, y => Math.pow(Math.max(5, y.a.CRE), 3) * (y.linea === "MED" ? 1 : 0.5), r) : null;
        ev.push({ min, eq: at, tipo: "gol", j: tirador.p.nombre, jid: tirador.p.id, as: asis ? asis.p.nombre : null, asid: asis ? asis.p.id : null });
      } else if (x < pGol + 0.25) {
        ev.push({ min, eq: at, tipo: "atajada", j: tirador.p.nombre, jid: tirador.p.id, por: portero.p.nombre, porid: portero.p.id });
      } else if (r() < 0.35) {
        ev.push({ min, eq: at, tipo: "fallo", j: tirador.p.nombre, jid: tirador.p.id });
      }
    }
    const tot = pos[0] + pos[1] || 1;
    return { gol, tiros, tarjetas, posesion: [Math.round(pos[0] / tot * 100), 100 - Math.round(pos[0] / tot * 100)], ev };
  }

  // Arma un 11 automático dentro del presupuesto (para rivales de la casa y botón "auto")
  function autoArmar(pool, formacion, filtro, presupuesto, semilla) {
    const f = FORMACIONES[formacion], r = rng(semilla || 1);
    const cand = pool.filter(filtro || (() => true));
    const xi = new Array(11).fill(null), usados = new Set();
    let resta = presupuesto;
    const orden = f.map((l, i) => i).sort((a, b) => (f[a] === "DEL" ? 0 : f[a] === "POR" ? 1 : 2) - (f[b] === "DEL" ? 0 : f[b] === "POR" ? 1 : 2));
    const baratos = l => pool.filter(p => p.pos === l && !usados.has(p.id)).map(p => p.precio).sort((a, b) => a - b);
    orden.forEach((slot, k) => {
      const linea = f[slot];
      const cuenta = {}; orden.slice(k + 1).forEach(i => cuenta[f[i]] = (cuenta[f[i]] || 0) + 1);
      const pendientes = Object.keys(cuenta).reduce((s, l) => s + baratos(l).slice(0, cuenta[l]).reduce((a, b) => a + b, 0), 0);
      const tope = resta - pendientes;
      let ops = cand.filter(p => p.pos === linea && !usados.has(p.id) && p.precio <= tope);
      if (!ops.length) ops = pool.filter(p => p.pos === linea && !usados.has(p.id) && p.precio <= tope);
      if (!ops.length) ops = pool.filter(p => p.pos === linea && !usados.has(p.id)).sort((a, b) => a.precio - b.precio).slice(0, 1);
      ops.sort((a, b) => (b.ovr + r() * 3) - (a.ovr + r() * 3));
      const elegido = ops[Math.min(ops.length - 1, Math.floor(r() * 2))];
      xi[slot] = elegido.id; usados.add(elegido.id); resta -= elegido.precio;
    });
    return xi;
  }

  G.CULTO = { MOTOR, QUIM_MAX, PARTE_MAX, PARTES, PAIS_NOM, bandera, quimicaDetalle, PRESUPUESTO, FORMACIONES, ESTILOS, cargar, fuerza, simular, autoArmar, hash, quimica, precio };
})(typeof window !== "undefined" ? window : globalThis);
