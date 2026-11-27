// Culto Fútbol MX — escudos de club hechos a mano por cada usuario (sin fotos).
(function (G) {
  const FORMAS = {
    clasico: { n: "Clásico", d: "M10 8H90V60C90 92 70 106 50 116C30 106 10 92 10 60Z" },
    punta: { n: "De punta", d: "M50 4L92 18V58C92 86 72 104 50 116C28 104 8 86 8 58V18Z" },
    frances: { n: "Francés", d: "M8 8H92V80C92 92 82 97 70 99C60 101 54 105 50 115C46 105 40 101 30 99C18 97 8 92 8 80Z" },
    redondo: { n: "Redondo", d: "M50 14A46 46 0 1 1 49.9 14Z" },
    hexagono: { n: "Hexágono", d: "M50 4L92 28V92L50 116L8 92V28Z" },
    moderno: { n: "Moderno", d: "M32 10H68A22 22 0 0 1 90 32V88A22 22 0 0 1 68 110H32A22 22 0 0 1 10 88V32A22 22 0 0 1 32 10Z" },
    rectangular: { n: "Rectangular", d: "M10 8H90V112H10Z" },
    cuadrado: { n: "Cuadrado", d: "M8 18H92V102H8Z" },
    rombo: { n: "Rombo", d: "M50 4L94 60L50 116L6 60Z" },
    triangular: { n: "Triangular", d: "M6 8H94L50 116Z" },
    ovalado: { n: "Ovalado", d: "M50 6C76 6 92 30 92 60C92 90 76 114 50 114C24 114 8 90 8 60C8 30 24 6 50 6Z" },
    pentagono: { n: "Pentágono", d: "M50 4L94 36L78 114H22L6 36Z" },
    octagono: { n: "Octágono", d: "M32 8H68L92 32V88L68 112H32L8 88V32Z" },
    ojival: { n: "Ojival", d: "M10 112V44C10 20 30 6 50 6C70 6 90 20 90 44V112Z" },
    italiano: { n: "Italiano", d: "M8 6C30 14 70 14 92 6V68C92 94 72 110 50 116C28 110 8 94 8 68Z" },
    ingles: { n: "Inglés", d: "M8 8L28 14L50 6L72 14L92 8V60C92 90 70 106 50 116C30 106 8 90 8 60Z" },
    castillo: { n: "Castillo", d: "M10 20H22V8H34V20H44V8H56V20H66V8H78V20H90V64C90 92 70 106 50 116C30 106 10 92 10 64Z" },
    banderin: { n: "Banderín", d: "M8 8H92V40L50 116L8 40Z" },
    gota: { n: "Gota", d: "M50 4C68 30 92 52 92 76C92 100 72 116 50 116C28 116 8 100 8 76C8 52 32 30 50 4Z" },
    suizo: { n: "Suizo", d: "M10 8H40L50 18L60 8H90V60C90 92 70 106 50 116C30 106 10 92 10 60Z" },
    polaco: { n: "Polaco", d: "M8 22C30 2 70 2 92 22V64C92 92 70 108 50 116C30 108 8 92 8 64Z" },
    bandera: { n: "Bandera", d: "M8 16C30 4 52 26 92 10V100C52 116 30 94 8 106Z" },
    medieval: { n: "Medieval", d: "M4 6H96L90 18V60C90 92 70 106 50 116C30 106 10 92 10 60V18Z" },
    colonial: { n: "Colonial", d: "M8 8H92C86 30 96 50 90 70C86 94 66 108 50 116C34 108 14 94 10 70C4 50 14 30 8 8Z" },
    escarapela: { n: "Escarapela", d: "M50 2L60 10L72 6L76 18L88 22L86 34L96 42L90 54L96 66L86 74L88 86L76 90L72 102L60 98L50 106L40 98L28 102L24 90L12 86L14 74L4 66L10 54L4 42L14 34L12 22L24 18L28 6L40 10Z" }
  };
  const PATRONES = {
    liso: { n: "Liso", f: (a, b) => "" },
    franja: { n: "Franja", f: (a, b) => `<rect x="37" y="0" width="26" height="120" fill="${b}"/>` },
    rayas: { n: "Rayas", f: (a, b) => [6, 30, 54, 78].map(x => `<rect x="${x}" y="0" width="12" height="120" fill="${b}"/>`).join("") },
    banda: { n: "Banda", f: (a, b) => `<path d="M-10 22L22 -10L112 98L80 130Z" fill="${b}"/>` },
    mitades: { n: "Mitades", f: (a, b) => `<rect x="50" y="0" width="60" height="120" fill="${b}"/>` },
    horizontal: { n: "Horizontal", f: (a, b) => `<rect x="0" y="0" width="100" height="44" fill="${b}"/>` },
    cuadros: { n: "Cuadros", f: (a, b) => { let s = ""; for (let y = 0; y < 6; y++) for (let x = 0; x < 5; x++) if ((x + y) % 2) s += `<rect x="${x * 20}" y="${y * 20}" width="20" height="20" fill="${b}"/>`; return s; } },
    chevron: { n: "Chevrón", f: (a, b) => `<path d="M0 40L50 70L100 40V64L50 94L0 64Z" fill="${b}"/>` },
    difuminado: { n: "Difuminado", f: (a, b, id) => `<defs><linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="100" height="120" fill="url(#${id}g)"/>` },
    lateral: { n: "Difuminado lateral", f: (a, b, id) => `<defs><linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="100" height="120" fill="url(#${id}g)"/>` },
    resplandor: { n: "Resplandor", f: (a, b, id) => `<defs><radialGradient id="${id}g" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="${b}"/><stop offset="1" stop-color="${a}"/></radialGradient></defs><rect width="100" height="120" fill="url(#${id}g)"/>` },
    cruz: { n: "Cruz", f: (a, b) => `<rect x="40" y="0" width="20" height="120" fill="${b}"/><rect x="0" y="44" width="100" height="20" fill="${b}"/>` },
    aspa: { n: "Aspa", f: (a, b) => `<path d="M-6 6L6 -6L106 114L94 126Z M94 -6L106 6L6 126L-6 114Z" fill="${b}"/>` },
    cuarteles: { n: "Cuarteles", f: (a, b) => `<rect x="0" y="0" width="50" height="60" fill="${b}"/><rect x="50" y="60" width="50" height="60" fill="${b}"/>` },
    rayash: { n: "Rayas horizontales", f: (a, b) => [8, 32, 56, 80, 104].map(y => `<rect x="0" y="${y}" width="100" height="12" fill="${b}"/>`).join("") },
    bandainv: { n: "Banda inversa", f: (a, b) => `<path d="M110 22L78 -10L-12 98L20 130Z" fill="${b}"/>` },
    diagonal: { n: "Diagonal", f: (a, b) => `<path d="M100 0V120H0Z" fill="${b}"/>` },
    tercios: { n: "Tercios", f: (a, b) => `<rect x="0" y="0" width="100" height="38" fill="${b}"/><rect x="0" y="80" width="100" height="40" fill="${b}"/>` },
    piramide: { n: "Pirámide", f: (a, b) => `<path d="M50 30L104 120H-4Z" fill="${b}"/>` },
    marco: { n: "Marco", f: (a, b) => `<rect x="0" y="0" width="100" height="120" fill="none" stroke="${b}" stroke-width="28"/>` },
    sol: { n: "Rayos de sol", f: (a, b) => { let s = ""; for (let i = 0; i < 16; i += 2) { const a1 = i * Math.PI / 8, a2 = (i + 1) * Math.PI / 8; s += `M50 58L${(50 + 120 * Math.cos(a1)).toFixed(1)} ${(58 + 120 * Math.sin(a1)).toFixed(1)}L${(50 + 120 * Math.cos(a2)).toFixed(1)} ${(58 + 120 * Math.sin(a2)).toFixed(1)}Z`; } return `<path d="${s}" fill="${b}"/>`; } },
    ondas: { n: "Ondas", f: (a, b) => [20, 56, 92].map(y => `<path d="M0 ${y}Q12.5 ${y - 10} 25 ${y}T50 ${y}T75 ${y}T100 ${y}V${y + 14}Q87.5 ${y + 24} 75 ${y + 14}T50 ${y + 14}T25 ${y + 14}T0 ${y + 14}Z" fill="${b}"/>`).join("") },
    zigzag: { n: "Zigzag", f: (a, b) => `<path d="M0 50L12.5 38L25 50L37.5 38L50 50L62.5 38L75 50L87.5 38L100 50V120H0Z" fill="${b}"/>` },
    lunares: { n: "Lunares", f: (a, b) => { let s = ""; for (let y = 0; y < 7; y++) for (let x = 0; x < 6; x++) s += `<circle cx="${x * 20 + (y % 2) * 10}" cy="${y * 18 + 6}" r="5" fill="${b}"/>`; return s; } },
    rombos: { n: "Rombos", f: (a, b) => { let s = ""; for (let y = 0; y < 5; y++) for (let x = 0; x < 4; x++) s += `M${x * 28 + 14} ${y * 28}l14 14l-14 14l-14 -14Z`; return `<path d="${s}" fill="${b}"/>`; } },
    anillo: { n: "Anillo", f: (a, b) => `<circle cx="50" cy="56" r="34" fill="none" stroke="${b}" stroke-width="12"/>` },
    pico: { n: "Pico", f: (a, b) => `<path d="M0 0H100V30L50 62L0 30Z" fill="${b}"/>` },
    escamas: { n: "Escamas", f: (a, b) => { let s = ""; for (let y = 0; y < 8; y++) for (let x = -1; x < 6; x++) s += `<path d="M${x * 20 + (y % 2) * 10} ${y * 16 + 16}a10 10 0 0 1 20 0" fill="none" stroke="${b}" stroke-width="3"/>`; return s; } }
  };
  // Figuras en una caja de 40x40; "ojo" se pinta con el color de fondo
  const estrella = (() => { let p = []; for (let i = 0; i < 10; i++) { const r = i % 2 ? 8 : 19, a = -Math.PI / 2 + i * Math.PI / 5; p.push((20 + r * Math.cos(a)).toFixed(1) + " " + (21 + r * Math.sin(a)).toFixed(1)); } return "M" + p.join("L") + "Z"; })();
  const FIGURAS = {
    ninguna: { n: "Ninguna", d: "" },
    aguila: { n: "Águila", d: "M20 8C22 8 24 9 24 11L28 12L24 13V15L38 7L35 13L39 13L34 18L37 19L28 23L25 27L27 36L22 31L20 39L18 31L13 36L15 27L12 23L3 19L6 18L1 13L5 13L2 7L16 15V11C16 9 18 8 20 8Z", ojos: [[19.5, 11, 1.2]] },
    toro: { n: "Toro", d: "M3 5C5 14 10 16 13 16V27C13 34 17 38 20 38C23 38 27 34 27 27V16C30 16 35 14 37 5C34 10 29 12 25 12H15C11 12 6 10 3 5Z", ojos: [[16.5, 21], [23.5, 21]] },
    lobo: { n: "Lobo", d: "M7 3L15 13H25L33 3L34 18C34 28 26 38 20 38C14 38 6 28 6 18Z", ojos: [[15, 21], [25, 21]] },
    felino: { n: "Jaguar", d: "M7 16L9 3L17 10H23L31 3L33 16C35 20 35 23 34 27C32 34 26 38 20 38C14 38 8 34 6 27C5 23 5 20 7 16Z", ojos: [[14.5, 22], [25.5, 22]] },
    gallo: { n: "Gallo", d: "M16 6C16 2 19 1 20 4C21 1 24 2 24 6C26 5 28 7 26 9L28 12L32 13L28 15V22C33 22 37 26 37 31L32 30C30 36 24 38 18 38C10 38 6 32 8 25C10 20 14 19 16 18Z", ojos: [[21, 11]] },
    zorro: { n: "Zorro", d: "M4 4L14 14H26L36 4L33 20L20 38L7 20Z", ojos: [[15, 20], [25, 20]] },
    estrella: { n: "Estrella", d: estrella },
    corona: { n: "Corona", d: "M4 29L7 10L14 20L20 6L26 20L33 10L36 29Z M4 31H36V36H4Z" },
    balon: { n: "Balón", d: "M20 2A18 18 0 1 1 19.9 2Z M20 13L27 18L24.5 26H15.5L13 18Z M20 2.5V9 M37 15L31 17 M30 35L26 29 M10 35L14 29 M3 15L9 17" },
    rayo: { n: "Rayo", d: "M24 1L7 23H18L13 39L33 15H22L27 1Z" },
    flama: { n: "Flama", d: "M20 1C26 11 34 16 32 27C31 35 25 39 20 39C14 39 8 35 8 27C8 20 13 16 14 9C17 14 18 17 20 20C22 13 22 7 20 1Z" },
    torre: { n: "Torre", d: "M8 39V11H12V5H16V11H18V5H22V11H24V5H28V11H32V39H24V30C24 26 16 26 16 30V39Z" },
    ancla: { n: "Ancla", d: "M18 2H22V6A4 4 0 1 1 18 6Z M18 10H22V14H28V18H22V33C27 32 31 28 32 24L29 23L36 18L37 27L34 26C32 33 26 38 20 38C14 38 8 33 6 26L3 27L4 18L11 23L8 24C9 28 13 32 18 33V18H12V14H18Z" },
    diamante: { n: "Diamante", d: "M10 4H30L38 14L20 38L2 14Z" },
    sombrero: { n: "Sombrero", d: "M1 28C1 24 9 22 13 22C13 12 16 5 20 5C24 5 27 12 27 22C31 22 39 24 39 28C39 32 30 34 20 34C10 34 1 32 1 28Z", det: "M13 19H27V22H13Z" },
    abeja: { n: "Abeja", d: "M20 14C14 3 3 5 5 12C7 17 13 17 17 16Z M20 14C26 3 37 5 35 12C33 17 27 17 23 16Z M20 13C26 13 29 19 29 26C29 33 25 38 20 38C15 38 11 33 11 26C11 19 14 13 20 13Z", det: "M11.4 21H28.6V24.5H11.4Z M11.6 28.5H28.4V32H11.6Z", ojos: [[17, 17, 1.3], [23, 17, 1.3]] },
    serpiente: { n: "Serpiente", trazo: "M27 9C16 4 6 10 12 18C17 25 30 21 28 30C26 38 12 38 6 33", tw: 6, d: "M23 8C23 3 35 2 37 7C35 12 24 12 23 8Z", ojos: [[31, 6, 1.2]] },
    perro: { n: "Perro", d: "M12 7H28C30 7 32 9 32 11V13L38 11L36 25L32 22V26C32 33 26 38 20 38C14 38 8 33 8 26V22L4 25L2 11L8 13V11C8 9 10 7 12 7Z", ojos: [[15, 19], [25, 19], [20, 28, 2.6]] },
    burro: { n: "Burro", d: "M12 1L17 16H23L28 1L31 3L26 18C30 22 30 28 28 32C26 36 23 38 20 38C17 38 14 36 12 32C10 28 10 22 14 18L9 3Z", ojos: [[16, 24], [24, 24]] },
    caballo: { n: "Caballo", d: "M14 2L18 8C26 8 34 14 36 26L38 34L30 36L26 28L22 30L21 38H8L10 24C8 18 10 10 14 2Z", ojos: [[24, 16, 1.6]] },
    tiburon: { n: "Tiburón", d: "M2 26C10 18 22 16 30 18L26 5L35 18C37 19 39 22 39 24L34 26L39 30C30 34 14 34 2 26Z", ojos: [[31, 23, 1.3]] },
    buho: { n: "Búho", d: "M8 4L14 10C18 8 22 8 26 10L32 4V24C32 32 27 38 20 38C13 38 8 32 8 24Z", ojos: [[15, 18, 4], [25, 18, 4]], det: "M18 23L20 28L22 23Z" },
    oso: { n: "Oso", d: "M11 4A5 5 0 1 1 10.9 4Z M29 4A5 5 0 1 1 28.9 4Z M20 8C29 8 35 15 35 24C35 32 28 38 20 38C12 38 5 32 5 24C5 15 11 8 20 8Z", ojos: [[14, 22], [26, 22], [20, 29, 3]] },
    calavera: { n: "Calavera", d: "M20 3C30 3 36 10 36 19C36 25 33 28 30 29V36H10V29C7 28 4 25 4 19C4 10 10 3 20 3Z", ojos: [[13, 19, 4], [27, 19, 4]], det: "M20 23L22.5 28H17.5Z M14 31H16V36H14Z M19 31H21V36H19Z M24 31H26V36H24Z" },
    nopal: { n: "Nopal", d: "M17 38V8C17 3 23 3 23 8V38Z M17 25H10C7 25 6 23 6 21V13C6 10 10 10 10 13V20H17Z M23 21H30V15C30 12 34 12 34 15V23C34 25 33 27 30 27H23Z" },
    corazon: { n: "Corazón", d: "M20 36C8 28 2 21 2 13C2 7 7 3 12 3C16 3 19 6 20 9C21 6 24 3 28 3C33 3 38 7 38 13C38 21 32 28 20 36Z" },
    trebol: { n: "Trébol", d: "M20 3A7 7 0 1 1 19.9 3Z M10 13A7 7 0 1 1 9.9 13Z M30 13A7 7 0 1 1 29.9 13Z M18 21H22L24 38H16Z" },
    montana: { n: "Montaña", d: "M1 36L14 12L20 20L27 7L39 36Z", det: "M27 7L31.5 17L28 15L25 18L23 15Z" },
    sol: { n: "Sol", d: (() => { let p = []; for (let i = 0; i < 24; i++) { const r = i % 2 ? 12 : 19, a = i * Math.PI / 12; p.push((20 + r * Math.cos(a)).toFixed(1) + " " + (20 + r * Math.sin(a)).toFixed(1)); } return "M" + p.join("L") + "Z"; })() },
    luna: { n: "Luna", d: "M24 2C14 4 6 12 6 22C6 31 14 38 24 38C29 38 33 36 36 33C33 34 31 34 28 34C19 34 12 27 12 18C12 10 17 4 24 2Z" },
    espadas: { n: "Espadas", trazo: "M8 32L33 7 M32 32L7 7", tw: 3.5, d: "M3 27L13 37L15 35L5 25Z M37 27L27 37L25 35L35 25Z" },
    alas: { n: "Alas", d: "M20 20C14 10 6 6 1 8C4 12 3 16 6 18C3 20 4 24 8 25C6 28 9 31 13 30C16 29 19 26 20 22C21 26 24 29 27 30C31 31 34 28 32 25C36 24 37 20 34 18C37 16 36 12 39 8C34 6 26 10 20 20Z" },
    arana: { n: "Araña", trazo: "M15 22L5 14L3 5 M15 26L3 26L1 33 M16 31L7 37 M25 22L35 14L37 5 M25 26L37 26L39 33 M24 31L33 37", tw: 2.2, d: "M20 8A5 5 0 1 1 19.9 8Z M20 17A8 10 0 1 1 19.9 17Z", ojos: [[18, 12, 1], [22, 12, 1]] },
    delfin: { n: "Delfín", d: "M4 24C10 14 22 10 32 14L34 5L37 16C39 18 40 21 39 23C36 22 34 22 32 24C30 30 22 34 14 32L10 38L9 30C6 29 4 27 4 24Z", ojos: [[31, 18, 1.2]] },
    maiz: { n: "Maíz", d: "M20 3C26 3 29 11 29 21C29 31 25 37 20 37C15 37 11 31 11 21C11 11 14 3 20 3Z M11 25C6 21 4 30 8 36C11 38 16 38 18 37Z M29 25C34 21 36 30 32 36C29 38 24 38 22 37Z", ojos: [[17, 10, 1.6], [23, 10, 1.6], [17, 16, 1.6], [23, 16, 1.6], [17, 22, 1.6], [23, 22, 1.6]] },
    piramide: { n: "Pirámide", d: "M2 38H38V33H34V28H30V23H26V18H23V11H17V18H14V23H10V28H6V33H2Z" },
    chile: { n: "Chile", d: "M24 7C26 5 30 6 31 9C34 11 34 16 31 21C26 30 16 37 6 38C5 37 6 35 8 34C16 30 22 23 24 15C25 12 25 10 24 7Z", trazo: "M27 8C27 4 30 2 33 2", tw: 2.5 },
    trofeo: { n: "Trofeo", d: "M10 3H30V7H37C37 16 33 20 28 21C26 25 23 27 22 28V32H27V37H13V32H18V28C17 27 14 25 12 21C7 20 3 16 3 7H10Z M7 11C8 14 9 16 11 17C10 15 10 13 10 11Z M33 11H30C30 13 30 15 29 17C31 16 32 14 33 11Z" },
    guitarra: { n: "Guitarra", trazo: "M26 14L37 3", tw: 3, d: "M17 12C21 12 23 15 22 18C26 17 30 20 29 26C28 33 21 38 14 36C7 34 3 28 5 22C6 18 10 16 13 17C12 14 14 12 17 12Z", ojos: [[16, 25, 3]] },
    ola: { n: "Ola", d: "M2 36C2 22 12 10 26 10C33 10 38 15 38 21C38 26 34 28 31 28C28 28 26 25 27 22C29 22 31 21 31 19C31 16 28 14 25 14C15 14 9 25 11 36Z" },
    hoja: { n: "Hoja", d: "M34 4C34 22 26 34 12 34L6 38L5 36L9 32C4 20 14 6 34 4Z", trazo: "M9 32C16 24 22 16 30 9", tw: 1.5 }
  };
  const COLORES = ["#c8102e", "#7b1e2b", "#ff7043", "#e65100", "#f2c200", "#c9a227", "#9e9d24", "#0f7a3e", "#66bb6a", "#00897b", "#00bcd4", "#81d4fa", "#1e88e5", "#3949ab", "#0b3d91", "#6b2fa0", "#ce93d8", "#ec407a", "#f48fb1", "#a1887f", "#5d4037", "#8d99a6", "#455a64", "#111111", "#ffffff"];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const claro = h => { const n = parseInt(h.slice(1), 16); return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 150; };
  let uid = 0;
  // Formas que se angostan abajo: la figura sube y las iniciales se acomodan
  const ANGOSTAS = {
    triangular: { f: [30, 12, 1.0], s: [26, 16, 1.2], y: 72 },
    banderin: { f: [28, 12, 1.1], s: [24, 18, 1.3], y: 74 },
    rombo: { f: [27, 24, 1.15], s: [22, 30, 1.4], y: 90 }
  };

  function limpiar(e) {
    if (!e || typeof e !== "object") return null;
    const col = c => COLORES.includes(c) ? c : null;
    const out = {
      forma: FORMAS[e.forma] ? e.forma : "clasico", patron: PATRONES[e.patron] ? e.patron : "liso",
      figura: FIGURAS[e.figura] ? e.figura : "ninguna",
      c1: col(e.c1) || "#c8102e", c2: col(e.c2) || "#ffffff", c3: col(e.c3) || "#f2c200",
      ini: String(e.ini || "").toUpperCase().replace(/[^A-ZÑ0-9]/g, "").slice(0, 3)
    };
    return out;
  }
  // Escudo automático para quien no ha diseñado el suyo (o para la casa)
  function defecto(id, nombre) {
    let h = 2166136261; const s = String(id); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } h >>>= 0;
    const pick = (arr, k) => arr[(h >>> k) % arr.length];
    const c1 = pick(COLORES, 0); let c2 = pick(COLORES, 5); if (c2 === c1) c2 = c1 === "#ffffff" ? "#111111" : "#ffffff";
    const ini = String(nombre || "").split(/\s+/).filter(w => w.length > 2 && !/^(los|las|del|de|la|el)$/i.test(w)).map(w => w[0]).join("").toUpperCase().replace(/[^A-ZÑ]/g, "").slice(0, 3);
    return { forma: pick(Object.keys(FORMAS), 3), patron: pick(Object.keys(PATRONES), 9), figura: pick(Object.keys(FIGURAS).slice(1), 13), c1, c2, c3: claro(c1) && claro(c2) ? "#111111" : "#ffffff", ini, auto: true };
  }

  function svg(e, size) {
    e = limpiar(e) || defecto("x");
    const id = "esc" + (++uid), F = FORMAS[e.forma], fig = FIGURAS[e.figura], chico = size && size < 40;
    const dark = claro(e.c3) ? "#00000066" : "#ffffff55";
    const ojos = (fig.ojos || []).map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r || 2}" fill="${e.c1}"/>`).join("")
      + (fig.det ? `<path d="${fig.det}" fill="${e.c1}"/>` : "");
    const trazo = fig.trazo ? `<path d="${fig.trazo}" fill="none" stroke="${e.c3}" stroke-width="${fig.tw || 3}" stroke-linecap="round" stroke-linejoin="round"/>` : "";
    const conIni = e.ini && !chico, ang = ANGOSTAS[e.forma];
    const [tx, ty, sc] = ang ? (conIni ? ang.f : ang.s) : conIni ? [22, 22, 1.4] : [18, 30, 1.6];
    const figura = fig.d ? `<g transform="translate(${tx} ${ty}) scale(${sc})">${trazo}<path d="${fig.d}" fill="${e.c3}" fill-rule="evenodd" stroke="${dark}" stroke-width="1"/>${ojos}</g>` : "";
    const ini = e.ini && !chico ? `<text x="50" y="${ang ? ang.y : ["redondo", "moderno", "hexagono", "rectangular", "cuadrado", "octagono", "ojival", "ovalado", "gota", "bandera", "escarapela"].includes(e.forma) ? 96 : 92}" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="${ang ? 15 : e.ini.length > 2 ? 17 : 20}" fill="${e.c3}" stroke="${dark}" stroke-width=".6" letter-spacing="1">${esc(e.ini)}</text>` : "";
    const sinFig = !fig.d && e.ini ? `<text x="50" y="74" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="${e.ini.length > 2 ? 30 : 38}" fill="${e.c3}" stroke="${dark}" stroke-width=".8">${esc(e.ini)}</text>` : "";
    const w = size ? ` width="${size * 100 / 120}" height="${size}"` : "";
    return `<svg class="escudo" viewBox="0 0 100 120"${w} role="img" aria-label="Escudo"><defs><clipPath id="${id}"><path d="${F.d}"/></clipPath></defs>
<g clip-path="url(#${id})"><rect width="100" height="120" fill="${e.c1}"/>${PATRONES[e.patron].f(e.c1, e.c2, id)}</g>
<path d="${F.d}" fill="none" stroke="${e.c3}" stroke-width="5"/><path d="${F.d}" fill="none" stroke="#00000040" stroke-width="1"/>
${fig.d ? figura + ini : sinFig}</svg>`;
  }

  G.ESCUDO = { FORMAS, PATRONES, FIGURAS, COLORES, svg, limpiar, defecto };
})(window);
