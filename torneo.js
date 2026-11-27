// Culto Fútbol MX — torneos cortos de 18 clubes: 17 jornadas, liguilla de 8 a ida y vuelta, Copa de Campeones.
// Todo es determinista: con las alineaciones congeladas y la semilla del torneo, cualquier celular calcula lo mismo.
(function (G) {
  const C = G.CULTO;
  const EQUIPOS = 18, JORNADAS = EQUIPOS - 1, RONDAS_LIG = 6, CLASIFICAN = 8, LOCAL = 2;
  const H = 3600000;
  const FASES_LIG = ["Cuartos · ida", "Cuartos · vuelta", "Semifinal · ida", "Semifinal · vuelta", "Final · ida", "Final · vuelta"];

  function calendario(n) {
    const arr = [...Array(n).keys()], rondas = [];
    for (let r = 0; r < n - 1; r++) {
      const partidos = [];
      for (let i = 0; i < n / 2; i++) {
        const a = arr[i], b = arr[n - 1 - i];
        partidos.push(i === 0 ? (r % 2 === 0 ? [a, b] : [b, a]) : (i % 2 === 1 ? [b, a] : [a, b]));
      }
      rondas.push(partidos);
      arr.splice(1, 0, arr.pop());
    }
    return rondas;
  }

  const DEBIL = { ataque: 55, medio: 55, defensa: 55, porteria: 55, quimica: 0, roles: [], media: 55, costo: 0 };
  function fuerzaDe(e, mapa, motor) { return C.fuerza(e, mapa, motor || C.MOTOR) || { ...DEBIL, motor: motor || C.MOTOR }; }
  function conLocalia(F) { return { ...F, ataque: F.ataque + LOCAL, medio: F.medio + LOCAL, defensa: F.defensa + LOCAL }; }

  function jugar(L, V, seed) {
    if (!L.roles.length || !V.roles.length) return { gol: [L.roles.length ? 3 : 0, V.roles.length ? 3 : 0], tiros: [0, 0], posesion: [50, 50], ev: [] };
    return C.simular(conLocalia(L), V, seed);
  }

  function penales(A, B, seed) {
    const r = (() => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; })();
    const tiradores = F => F.roles.filter(x => x.linea !== "POR").sort((a, b) => b.a.ATQ - a.a.ATQ);
    const portero = F => (F.roles.find(x => x.linea === "POR") || { a: { POR: 60 } }).a.POR;
    const T = [tiradores(A), tiradores(B)], P = [portero(B), portero(A)], g = [0, 0];
    for (let i = 0; i < 30; i++) {
      for (let e = 0; e < 2; e++) {
        const s = T[e][i % Math.max(1, T[e].length)];
        const atq = s ? s.a.ATQ : 70;
        if (r() < Math.max(0.55, Math.min(0.9, 0.74 + (atq - P[e]) / 150))) g[e]++;
      }
      if (i >= 4 && g[0] !== g[1]) break;
      if (i === 29 && g[0] === g[1]) g[r() < 0.5 ? 0 : 1]++;
    }
    return g;
  }

  // Serie a ida y vuelta. alto = mejor sembrado (cierra en casa). desempate: "posicion" o "penales"
  function serie(tid, ronda, alto, bajo, F, desempate) {
    const s1 = C.hash(tid + "|L" + ronda + "|ida|" + alto.id + "|" + bajo.id);
    const s2 = C.hash(tid + "|L" + ronda + "|vuelta|" + alto.id + "|" + bajo.id);
    const ida = jugar(F[bajo.i], F[alto.i], s1);
    const vuelta = jugar(F[alto.i], F[bajo.i], s2);
    const gAlto = ida.gol[1] + vuelta.gol[0], gBajo = ida.gol[0] + vuelta.gol[1];
    let gana = gAlto > gBajo ? alto : gBajo > gAlto ? bajo : null, pen = null;
    if (!gana) {
      if (desempate === "posicion") gana = alto;
      else { pen = penales(F[alto.i], F[bajo.i], C.hash(s2 + "|pen")); gana = pen[0] > pen[1] ? alto : bajo; }
    }
    return { alto, bajo, ida: { l: bajo, v: alto, r: ida }, vuelta: { l: alto, v: bajo, r: vuelta }, global: [gAlto, gBajo], pen, gana, porPosicion: gAlto === gBajo && desempate === "posicion" };
  }

  // Ritmo -1 = "en vivo": cada jornada tarda unos segundos y cada partido de liguilla, 10 segundos
  const VIVO = { j: 2500, l: 10000 };
  function horaJornada(t, j) { return t.ritmoH === -1 ? t.creado + j * VIVO.j : t.creado + j * (t.ritmoH || 0) * H; }
  function horaLiguilla(t, k) { return t.ritmoH === -1 ? t.creado + JORNADAS * VIVO.j + k * VIVO.l : horaJornada(t, JORNADAS + k); }
  function fin(t) { return horaLiguilla(t, RONDAS_LIG); }

  function tablaDe(equipos, jornadas, hasta) {
    const T = equipos.map((e, i) => ({ e, i, pj: 0, g: 0, em: 0, p: 0, gf: 0, gc: 0 }));
    jornadas.slice(0, hasta).forEach(J => J.forEach(m => {
      const a = T[m.l], b = T[m.v], [x, y] = m.r.gol;
      a.pj++; b.pj++; a.gf += x; a.gc += y; b.gf += y; b.gc += x;
      if (x > y) { a.g++; b.p++; } else if (x < y) { b.g++; a.p++; } else { a.em++; b.em++; }
    }));
    return T.map(x => ({ ...x, pts: x.g * 3 + x.em, dg: x.gf - x.gc, des: C.hash(x.e.id) }))
      .sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf || a.des - b.des);
  }

  const cache = new Map();
  function calcular(t, mapa) {
    const key = t.id + ":" + t.creado;
    if (cache.has(key)) return cache.get(key);
    const eq = t.equipos.map((e, i) => ({ ...e, i }));
    const F = eq.map(e => fuerzaDe(e, mapa, t.motor || 2));
    const cal = calendario(eq.length);
    const jornadas = cal.map((J, j) => J.map(([l, v]) => ({ l, v, r: jugar(F[l], F[v], C.hash(t.id + "|J" + (j + 1) + "|" + eq[l].id + "|" + eq[v].id)) })));
    const final = tablaDe(eq, jornadas, JORNADAS);
    const sem = final.slice(0, CLASIFICAN).map((x, k) => ({ ...eq[x.i], seed: k + 1 }));
    const cuartos = [[0, 7], [1, 6], [2, 5], [3, 4]].map(([a, b]) => serie(t.id, 1, sem[a], sem[b], F, "posicion"));
    const vivos = cuartos.map(s => s.gana).sort((a, b) => a.seed - b.seed);
    const semis = [[0, 3], [1, 2]].map(([a, b]) => serie(t.id, 2, vivos[a], vivos[b], F, "posicion"));
    const fin2 = semis.map(s => s.gana).sort((a, b) => a.seed - b.seed);
    const laFinal = serie(t.id, 3, fin2[0], fin2[1], F, "penales");
    const out = { eq, F, jornadas, tablaFinal: final, sem, cuartos, semis, final: laFinal, campeon: laFinal.gana, sub: laFinal.gana === fin2[0] ? fin2[1] : fin2[0] };
    cache.set(key, out);
    return out;
  }

  // Estado visible en este momento
  function estado(t, mapa, ahora) {
    const c = calcular(t, mapa);
    let jugadas = 0; while (jugadas < JORNADAS && ahora >= horaJornada(t, jugadas + 1)) jugadas++;
    let lig = 0; while (lig < RONDAS_LIG && ahora >= horaLiguilla(t, lig + 1)) lig++;
    const terminado = lig === RONDAS_LIG;
    const prox = terminado ? null : jugadas < JORNADAS ? horaJornada(t, jugadas + 1) : horaLiguilla(t, lig + 1);
    const fase = terminado ? "terminado" : jugadas < JORNADAS ? "regular" : "liguilla";
    return { ...c, jugadas, lig, terminado, prox, fase, tabla: tablaDe(c.eq, c.jornadas, jugadas) };
  }

  // Copa de Campeones: cada 8 campeones juegan eliminación a ida y vuelta (empate global: penales)
  function copa(num, campeones, F) {
    const sem = campeones.map((c, k) => ({ ...c, i: k, seed: k + 1 }));
    const tid = "copa" + num;
    const cuartos = [[0, 7], [1, 6], [2, 5], [3, 4]].map(([a, b]) => serie(tid, 1, sem[a], sem[b], F, "penales"));
    const v = cuartos.map(s => s.gana).sort((a, b) => a.seed - b.seed);
    const semis = [[0, 3], [1, 2]].map(([a, b]) => serie(tid, 2, v[a], v[b], F, "penales"));
    const f = semis.map(s => s.gana).sort((a, b) => a.seed - b.seed);
    const final = serie(tid, 3, f[0], f[1], F, "penales");
    return { num, sem, cuartos, semis, final, campeon: final.gana };
  }

  // Tabla de goleo: goles de fase regular hasta la jornada indicada (como en la liga) y, aparte, goles en liguilla
  function goleo(est, hasta, ligHasta) {
    const M = new Map();
    const sumar = (eqIdx, ev, campo) => ev.forEach(e => {
      if (e.tipo !== "gol" || !e.jid) return;
      const team = e.eq === 0 ? eqIdx[0] : eqIdx[1], k = team + "|" + e.jid;
      const x = M.get(k) || { pid: e.jid, nombre: e.j, eq: team, goles: 0, lig: 0 };
      x[campo]++; M.set(k, x);
    });
    est.jornadas.slice(0, hasta).forEach(J => J.forEach(m => sumar([m.l, m.v], m.r.ev, "goles")));
    const legs = [];
    [est.cuartos, est.semis, [est.final]].forEach((ser, ri) => ser.forEach(s => { legs.push([ri * 2 + 1, s.ida]); legs.push([ri * 2 + 2, s.vuelta]); }));
    legs.forEach(([k, leg]) => { if (k <= (ligHasta || 0)) sumar([leg.l.i, leg.v.i], leg.r.ev, "lig"); });
    return [...M.values()].sort((a, b) => b.goles - a.goles || b.lig - a.lig || (a.nombre < b.nombre ? -1 : 1));
  }

  G.TORNEO = { VIVO, goleo, EQUIPOS, JORNADAS, RONDAS_LIG, CLASIFICAN, FASES_LIG, H, calendario, calcular, estado, horaJornada, horaLiguilla, fin, copa, fuerzaDe, penales };
})(typeof window !== "undefined" ? window : globalThis);
