// Culto Fútbol MX — estampas ilustradas (sin fotos, escudos ni marcas): silueta con playera en colores del club.
(function (G) {
  // [color principal, color secundario, patrón] — patrón: liso, rayas, banda, mitades
  const CLUB = {
    "América": ["#f5d000", "#0d2c6c", "liso"], "Chivas": ["#c8102e", "#ffffff", "rayas"], "Cruz Azul": ["#0047bb", "#ffffff", "liso"],
    "Pumas": ["#0b1f45", "#c5a14a", "liso"], "Toluca": ["#d50032", "#ffffff", "liso"], "Tigres": ["#fdb913", "#00529b", "liso"],
    "Monterrey": ["#001f5b", "#ffffff", "rayas"], "Santos": ["#00843d", "#ffffff", "mitades"], "Pachuca": ["#003da5", "#ffffff", "rayas"],
    "León": ["#006341", "#ffffff", "liso"], "Atlas": ["#b5121b", "#111111", "rayas"], "Necaxa": ["#d2232a", "#ffffff", "rayas"],
    "Puebla": ["#ffffff", "#0033a0", "banda"], "Morelia": ["#f2c200", "#c8102e", "mitades"], "Tecos": ["#f5f1e6", "#7a1f2b", "banda"],
    "Atlante": ["#a50044", "#004d98", "rayas"], "Veracruz": ["#d2232a", "#ffffff", "rayas"], "Querétaro": ["#0b2d6b", "#111111", "rayas"],
    "Tijuana": ["#c8102e", "#111111", "rayas"], "Jaguares": ["#f26522", "#111111", "liso"], "San Luis": ["#d2232a", "#0b2d6b", "banda"],
    "Indios": ["#c8102e", "#111111", "liso"], "Celaya": ["#0a6e3a", "#ffffff", "liso"], "Toros Neza": ["#ffffff", "#d50032", "banda"],
    "Irapuato": ["#ffffff", "#d50032", "banda"]
  };
  const ERA = { "60s": "#b8915a", "70s": "#d9762b", "80s": "#1f8a8a", "90s": "#6b3fa0", "00s": "#2b6cb0", "10s": "#2f855a", "20s": "#d6006f" };
  const POS = { POR: "Portero", DEF: "Defensa", MED: "Medio", DEL: "Delantero" };
  let uid = 0;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lum = hex => { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
  function nombreCorto(p) {
    if (p.apodo) return p.apodo;
    if (p.nombre.includes('"')) return p.nombre.match(/"(.*?)"/)[1];
    const s = p.nombre.split(" "); if (s.length === 1) return p.nombre;
    const prev = s[s.length - 2];
    return /^(de|da|del|dos|la)$/.test(prev) ? prev + " " + s[s.length - 1] : s[s.length - 1];
  }

  // p: jugador del catálogo; opts.dorsal: número opcional
  function estampa(p, opts = {}) {
    const id = "e" + (++uid);
    const [c1, c2, pat] = CLUB[p.club] || ["#8a949c", "#e8ecef", "liso"];
    const era = ERA[p.era] || "#555";
    const leyenda = p.ovr >= 88;
    const num = opts.dorsal || "";
    const numColor = lum(c1) > 0.6 ? "#14202a" : "#ffffff";
    const corto = nombreCorto(p);
    const fs = corto.length > 14 ? 13 : corto.length > 10 ? 15 : 17;
    let patron = "";
    if (pat === "rayas") patron = [0, 1, 2, 3, 4].map(k => `<rect x="${42 + k * 18}" y="120" width="9" height="90" fill="${c2}"/>`).join("");
    if (pat === "banda") patron = `<path d="M40 128 L58 120 L128 196 L110 206 Z" fill="${c2}"/>`;
    if (pat === "mitades") patron = `<rect x="80" y="118" width="60" height="92" fill="${c2}"/>`;
    const marco = leyenda ? `url(#${id}o)` : era;
    return `<svg class="estampa" viewBox="0 0 160 224" role="img" aria-label="${esc(p.nombre)}, ${POS[p.pos]}, ${esc(p.club)}, media ${p.ovr}" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="${id}o" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3b0"/><stop offset=".35" stop-color="#e2b33c"/><stop offset=".6" stop-color="#b8860b"/><stop offset="1" stop-color="#f6d77a"/></linearGradient>
<linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}" stop-opacity=".22"/><stop offset="1" stop-color="${c1}" stop-opacity=".55"/></linearGradient>
<linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset=".56" stop-color="#fff" stop-opacity="0"/></linearGradient>
<clipPath id="${id}c"><path d="M28 210 C28 160 44 132 80 124 C116 132 132 160 132 210 Z"/></clipPath>
<clipPath id="${id}v"><rect x="10" y="10" width="140" height="160" rx="8"/></clipPath>
</defs>
<rect x="2" y="2" width="156" height="220" rx="12" fill="${marco}"/>
<rect x="8" y="8" width="144" height="208" rx="9" fill="#fbf7ec"/>
<g clip-path="url(#${id}v)">
<rect x="10" y="10" width="140" height="160" fill="url(#${id}f)"/>
<circle cx="80" cy="96" r="58" fill="#fff" opacity=".35"/>
<g transform="translate(0,-20)"><g clip-path="url(#${id}c)"><rect x="20" y="118" width="120" height="100" fill="${c1}"/>${patron}</g>
<path d="M66 124 L80 140 L94 124" fill="none" stroke="${c2 === "#ffffff" && lum(c1) > 0.8 ? "#14202a" : c2}" stroke-width="4" stroke-linejoin="round"/>
<rect x="72" y="108" width="16" height="18" rx="6" fill="#2a2320"/>
<ellipse cx="80" cy="88" rx="22" ry="26" fill="#2a2320"/>
<path d="M58 82 C58 62 102 62 102 82 C98 72 62 72 58 82 Z" fill="#14110f"/>
<ellipse cx="57" cy="90" rx="4" ry="7" fill="#2a2320"/><ellipse cx="103" cy="90" rx="4" ry="7" fill="#2a2320"/></g>
${num ? `<text x="80" y="160" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="28" fill="${numColor}" stroke="${numColor === "#fff" || numColor === "#ffffff" ? "#0009" : "#fff9"}" stroke-width="1.6" paint-order="stroke" opacity=".95">${esc(num)}</text>` : ""}
${leyenda ? `<rect x="10" y="10" width="140" height="160" fill="url(#${id}b)"/>` : ""}
</g>
<g>
<rect x="14" y="14" width="40" height="46" rx="7" fill="#14202a" opacity=".88"/>
<text x="34" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="26" fill="${leyenda ? "#f6d77a" : "#fff"}">${p.ovr}</text>
<text x="34" y="56" text-anchor="middle" font-family="Barlow,system-ui,sans-serif" font-size="9" font-weight="700" fill="#cfd8dc">${p.pos}</text>
${opts.consentido ? `<circle cx="129" cy="50" r="12" fill="#f6c90e" stroke="#fff" stroke-width="2"/><text x="129" y="55.5" text-anchor="middle" font-size="14">⭐</text>` : ""}
${p.pais && window.CULTO ? `<text x="34" y="76" text-anchor="middle" font-size="14">${window.CULTO.bandera(p.pais)}</text>` : ""}
<rect x="112" y="16" width="34" height="16" rx="8" fill="${era}"/>
<text x="129" y="28" text-anchor="middle" font-family="Barlow,system-ui,sans-serif" font-size="10" font-weight="700" fill="#fff">'${p.era.slice(0, 2)}</text>
</g>
<rect x="8" y="170" width="144" height="46" fill="${leyenda ? "#14202a" : era}" />
<rect x="8" y="170" width="144" height="46" rx="0" fill="none"/>
<text x="80" y="192" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="${fs}" fill="${leyenda ? "#f6d77a" : "#fff"}">${esc(corto)}</text>
<text x="80" y="208" text-anchor="middle" font-family="Barlow,system-ui,sans-serif" font-size="10" font-weight="600" fill="#ffffffd9">${esc(p.club)} · ${POS[p.pos]}</text>
<rect x="2" y="2" width="156" height="220" rx="12" fill="none" stroke="#000" stroke-opacity=".12"/>
</svg>`;
  }
  G.ESTAMPA = { estampa, CLUB, ERA };
})(typeof window !== "undefined" ? window : globalThis);
