// ===== PIZZA DATA (with real prices) =====
const PIZZE = [
  { num:1,  name:"Margherita", nameEN:"Margherita",
    desc:"Pomodoro e mozzarella",
    descEN:"Tomato and mozzarella",
    trancio:"€1,50", mezza:"€9,00", teglia:"€15,00", cat:"classic" },

  { num:2,  name:"Salame", nameEN:"Salami",
    desc:"Pomodoro, mozzarella, salame dolce",
    descEN:"Tomato, mozzarella, sweet salami",
    trancio:"€2,00", mezza:"€11,50", teglia:"€18,00", cat:"classic" },

  { num:3,  name:"Patate & Rosmarino", nameEN:"Potato & Rosemary",
    desc:"Patate e rosmarino",
    descEN:"Potatoes and rosemary",
    trancio:"€1,50", mezza:"€9,00", teglia:"€15,00", cat:"veggie" },

  { num:4,  name:"Capricciosa", nameEN:"Capricciosa",
    desc:"Pomodoro, carciofi, funghi champignon, mozzarella, prosciutto cotto, olive nere",
    descEN:"Tomato, artichokes, mushrooms, mozzarella, cooked ham, black olives",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"classic", special:true },

  { num:5,  name:"Halloween", nameEN:"Halloween",
    desc:"Crema di zucca, guanciale, mozzarella, provola affumicata",
    descEN:"Pumpkin cream, guanciale, mozzarella, smoked cheese",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"special", special:true },

  { num:6,  name:"Delizie di Bosco", nameEN:"Forest Delight",
    desc:"Funghi champignon, mozzarella, speck, crema ai 4 formaggi",
    descEN:"Mushrooms, mozzarella, speck, four-cheese cream",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"special" },

  { num:7,  name:"Gricia", nameEN:"Gricia",
    desc:"Crema di pecorino, guanciale, mozzarella, pepe nero, pecorino",
    descEN:"Pecorino cream, guanciale, mozzarella, black pepper, pecorino",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"special", special:true },

  { num:8,  name:"Bufalina", nameEN:"Bufalina",
    desc:"Datterino in salsa, burrata, basilico",
    descEN:"Cherry tomato sauce, burrata, basil",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"special", special:true },

  { num:9,  name:"Parmigiana Scomposta", nameEN:"Deconstructed Parmigiana",
    desc:"Pomodoro, parmigiano, melanzane, burrata, basilico",
    descEN:"Tomato, parmesan, aubergine, burrata, basil",
    trancio:"€2,50", mezza:"€15,00", teglia:"€28,00", cat:"special", special:true },

  { num:10, name:"La Mortazza", nameEN:"Mortadella",
    desc:"Mortadella, stracciatella, granella di pistacchio",
    descEN:"Mortadella, stracciatella, crushed pistachios",
    trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"special", special:true },

  { num:11, name:"Primavera", nameEN:"Primavera",
    desc:"Pomodoro fresco, rucola, prosciutto crudo, grana",
    descEN:"Fresh tomato, rocket, raw ham, parmesan",
    trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"veggie" },

  { num:12, name:"Intensa", nameEN:"Spicy",
    desc:"Datterino giallo, spianata piccante, stracciatella",
    descEN:"Yellow cherry tomato, spicy salami, stracciatella",
    trancio:"€2,50", mezza:"€15,00", teglia:"€28,00", cat:"special", special:true, spicy:true },

  { num:13, name:"Ortolana", nameEN:"Garden Vegetable",
    desc:"Pomodoro, melanzane, zucchine, peperoni, mozzarella",
    descEN:"Tomato, aubergine, courgette, peppers, mozzarella",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"veggie" },

  { num:14, name:"4 Formaggi", nameEN:"Four Cheeses",
    desc:"Mozzarella, gorgonzola, parmigiano, pecorino",
    descEN:"Mozzarella, gorgonzola, parmesan, pecorino",
    trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"classic" },

  { num:15, name:"Contrasto", nameEN:"Contrast",
  desc:"Datterino giallo, crema di pistacchio, tonno, cipolla caramellata",
  descEN:"Yellow cherry tomato, pistachio cream, tuna, caramelized onion",
  trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"seafood", special:true },

{ num:16, name:"Oro Nero", nameEN:"Black Gold",
  desc:"Pomodorini, speck, crema di parmigiano, granella di olive nere",
  descEN:"Cherry tomatoes, speck, parmesan cream, crushed black olives",
  trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"special" },

{ num:17, name:"Sila", nameEN:"Sila",
  desc:"Patate mpacchiuse, funghi porcini, salsiccia fresca",
  descEN:"Local potatoes, porcini mushrooms, fresh sausage",
  trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"special", special:true },

{ num:18, name:"Tonno e Cipolla", nameEN:"Tuna & Onion",
  desc:"Pomodoro, mozzarella, tonno, cipolla",
  descEN:"Tomato, mozzarella, tuna, onion",
  trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"seafood" },

{ num:19, name:"Soft", nameEN:"Soft",
  desc:"Prosciutto cotto, mozzarella",
  descEN:"Cooked ham, mozzarella",
  trancio:"€2,00", mezza:"€11,50", teglia:"€20,00", cat:"classic" },

{ num:20, name:"Fresca", nameEN:"Fresh",
  desc:"Datterino giallo, datterino rosso, mozzarella, acciughe",
  descEN:"Yellow cherry tomato, red cherry tomato, mozzarella, anchovies",
  trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"seafood" },

 
{ num:21, name:"Smeraldo", nameEN:"Emerald",
  desc:"Zucchine julienne, gamberi, salsa cocktail",
  descEN:"Julienne courgette, prawns, cocktail sauce",
  trancio:"€2,50", mezza:"€15,00", teglia:"€25,00", cat:"seafood" },
  
];

const DRINKS = [
  { name:"Martini",
    ingredients:"Gin o Vodka, Vermuth Extra Dry · Dec: Zest Limone, Oliv",
    price:"€5" },
  { name:"Cuba Libre",
    ingredients:"Rum, Lime, Coca Cola · Dec: Lime",
    price:"€5" },
  { name:"Margarita",
    ingredients:"Tequila, Triple Sec, Lime · Dec: Rim Sale",
    price:"€7" },
  { name:"Daiquiri",
    ingredients:"Rum, Lime, Zucchero · Dec: Zest Lime",
    price:"€5" },
  { name:"Kamikaze",
    ingredients:"Vodka, Triple Sec, Limone, Zucchero · Dec: Zest Limone",
    price:"€5" },
  { name:"Aperol Spritz",
    ingredients:"Aperol, Prosecco, Soda · Dec: Arancia",
    price:"€5" },
  { name:"Campari Spritz",
    ingredients:"Campari, Prosecco, Soda · Dec: Arancia",
    price:"€5" },
  { name:"Vodka Sour",
    ingredients:"Vodka, Limone, Zucchero · Dec: Limone",
    price:"€5" },
  { name:"Whisky Sour",
    ingredients:"Whisky, Limone, Zucchero · Dec: Limone",
    price:"€5" },
  { name:"Midori Sour",
    ingredients:"Midori, Limone, Zucchero · Dec: Limone",
    price:"€5" },
  { name:"Cosmopolitan",
    ingredients:"Vodka, Triple Sec, Cranberry, Lime · Dec: Peel Arancia",
    price:"€5" },
  { name:"Caipirinha",
    ingredients:"Cachaça, Lime, Zucchero · Dec: Lime",
    price:"€5" },
  { name:"White Lady",
    ingredients:"Gin, Triple Sec, Limone, Zucchero · Dec: Zest Limone",
    price:"€5" },
  { name:"Gin Fizz",
    ingredients:"Gin, Lime, Zucchero, Soda · Dec: Limone",
    price:"€6" },
  { name:"Long Island Iced Tea",
    ingredients:"Vodka, Gin, Rum, Tequila, Triple Sec, Top Coca Cola · Dec: Zest Limone",
    price:"€6" },
  { name:"Japanese Ice Tea",
    ingredients:"Vodka, Rum, Gin, Midori, Limone, Zucchero · Dec: Limone",
    price:"€5" },
  { name:"Miami Ice Tea",
    ingredients:"Vodka, Rum, Gin, Blue Curaçao, Limone, Zucchero · Dec: Limone",
    price:"€5" },
  { name:"Sex on the Beach",
    ingredients:"Vodka, Peach, Arancia, Cranberry · Dec: Zest Arancia",
    price:"€5" },
  { name:"Tequila Sunrise",
    ingredients:"Tequila, Arancia, Granatina · Dec: Arancia",
    price:"€5" },
  { name:"Americano",
    ingredients:"Vermuth Rosso, Campari Bitter, Soda · Dec: Arancia",
    price:"€5" },
  { name:"Negroni Sbagliato",
    ingredients:"Vermuth Rosso, Campari Bitter, Prosecco · Dec: Arancia",
    price:"€5" },
  { name:"Negroni",
    ingredients:"Gin Bombay, Vermuth Rosso, Campari Bitter · Dec: Zest Arancia",
    price:"€6" },
  { name:"Moscow Mule",
    ingredients:"Vodka, Lime, Ginger Beer · Dec: Lime",
    price:"€6" },
  { name:"Old Fashioned",
    ingredients:"Bourbon Whisky, Angostura Bitter, Soda, Zucchero · Dec: Zest Limone, Arancia, Ciliegie Marasca",
    price:"€5" },
  { name:"Pornostar Martini",
    ingredients:"Vodka, Passoa, Lime, Passion Fruit, Prosecco · Dec: Passion Fruit",
    price:"€5" },
  { name:"Mojito",
    ingredients:"Rum, Menta, Lime, Zucchero, Soda · Dec: Menta",
    price:"€7" },
  { name:"Caipiroska",
    ingredients:"Fragola / Lime / Passion Fruit · Vodka, Lime, Zucchero · Dec: Lime",
    price:"€5" },
  { name:"Paloma",
    ingredients:"Tequila, Lime, Agave, Fever Tree Pompelmo · Dec: Pompelmo Rosa",
    price:"€8" },
  { name:"Pina Colada",
    ingredients:"Rum, Lime, Ananas, Cocco · Dec: Ananas",
    price:"€5" },
  { name:"Manhattan",
    ingredients:"Ry Whisky, Vermouth Rosso, Angostura Bitter · Dec: Zest Arancia",
    price:"€5" },
  { name:"Mai Tai",
    ingredients:"Rum Bianco, Rum Scuro, Triple Sec, Lime, Orzata · Dec: Ananas",
    price:"€5" },
  { name:"French 75",
    ingredients:"Gin, Limone, Zucchero, Prosecco · Dec: Zest Limone",
    price:"€6" },
];

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  it: {
    "nav.home":"Home","nav.menu":"Menu","nav.drinks":"Drink","nav.about":"About","nav.contact":"Contatti",
    "hero.tagline":"Pizza artigianale · Cocktail d'autore",
    "hero.sub":"Dove la tradizione incontra il carattere",
    "hero.cta":"Scopri il Menu","hero.cta2":"I Nostri Drink",
    "menu.label":"— Menu —","menu.title":"Le Nostre Pizze",
    "menu.desc":"Impasto a lievitazione naturale, ingredienti selezionati",
    "legend.trancio":"Trancio","legend.mezza":"Mezza Teglia","legend.teglia":"Teglia Intera",
    "filter.all":"Tutte","filter.classic":"Classiche","filter.special":"Speciali",
    "filter.veggie":"Veggie","filter.seafood":"Mare",
    "drinks.label":"— Bar —","drinks.title":"Cocktail Classici",
    "drinks.desc":"Miscelazione d'autore, ingredienti di qualità",
    "about.label":"— Chi siamo —","about.title":"L'Officina",
    "about.p1":"Officina Slice nasce dall'idea che una buona pizza debba essere un'esperienza completa: impasto curato, ingredienti freschi e un'atmosfera unica.",
    "about.p2":"Ogni pizza è un pezzo artigianale, preparata con passione e servita al trancio o intera. Abbinala ai nostri cocktail d'autore per un'esperienza indimenticabile.",
    "about.pizze":"Pizze","about.artigianale":"Artigianale","about.passione":"Passione",
    "contact.label":"— Trovaci —","contact.title":"Contatti",
    "contact.where":"Dove siamo","contact.hours":"Orari",
    "contact.hoursval":"Lun-Sab: 10:30–15:00 / 17:30–00:30<br/>Domenica: 17:00–23:00<br><br>Chiuso: Domenica Mattina",
    "contact.phone":"Telefono",
    "footer.love":"Fatto con ❤️ e farina",
    "lang.btn":"🇬🇧 EN",
    "trancio":"Trancio","mezza":"Mezza","teglia":"Teglia"
  },
  en: {
    "nav.home":"Home","nav.menu":"Menu","nav.drinks":"Drinks","nav.about":"About","nav.contact":"Contact",
    "hero.tagline":"Artisan Pizza · Signature Cocktails",
    "hero.sub":"Where tradition meets character",
    "hero.cta":"Explore the Menu","hero.cta2":"Our Drinks",
    "menu.label":"— Menu —","menu.title":"Our Pizzas",
    "menu.desc":"Natural leavening dough, selected ingredients",
    "legend.trancio":"By the Slice","legend.mezza":"Half Tray","legend.teglia":"Full Tray",
    "filter.all":"All","filter.classic":"Classics","filter.special":"Specials",
    "filter.veggie":"Veggie","filter.seafood":"Seafood",
    "drinks.label":"— Bar —","drinks.title":"Classic Cocktails",
    "drinks.desc":"Expert mixology, quality ingredients",
    "about.label":"— About us —","about.title":"The Workshop",
    "about.p1":"Officina Slice was born from the idea that a great pizza should be a complete experience: carefully crafted dough, fresh ingredients, and a unique atmosphere.",
    "about.p2":"Every pizza is handcrafted with passion and served by the slice or whole. Pair it with our signature cocktails for an unforgettable evening.",
    "about.pizze":"Pizzas","about.artigianale":"Artisanal","about.passione":"Passion",
    "contact.label":"— Find us —","contact.title":"Contact",
    "contact.where":"Where we are","contact.hours":"Hours",
    "contact.hoursval":"Mon-Sun: 10:30–15:00 / 17:30–00:30<br/>Sunday: 17:00–23:00<br><br>Closed: Sunday Morning",
    "contact.phone":"Phone",
    "footer.love":"Made with ❤️ and flour",
    "lang.btn":"🇮🇹 IT",
    "trancio":"Slice","mezza":"Half","teglia":"Full"
  }
};

// ===== SITE CONFIG (multi-sito: stesso layout, contenuti da config.json) =====
// PIZZE / DRINKS / TRANSLATIONS sopra restano come fallback se config.json manca
// (es. apertura via file:// o deploy senza config).
let SITE_CONFIG = null;

async function loadSiteConfig() {
  const candidates = ['config.json', 'sites/officina-slice/config.json'];
  for (const url of candidates) {
    try {
      const res = await fetch(url);
      if (res.ok) { SITE_CONFIG = await res.json(); return; }
    } catch (e) { /* prova il prossimo candidato */ }
  }
  SITE_CONFIG = null;
}

function getPizze() { return (SITE_CONFIG && SITE_CONFIG.menu) || PIZZE; }
function getDrinks() { return (SITE_CONFIG && SITE_CONFIG.drinks) || DRINKS; }
function getStrings(lang) {
  const base = TRANSLATIONS[lang] || TRANSLATIONS.it;
  const over = (SITE_CONFIG && SITE_CONFIG.i18n && SITE_CONFIG.i18n[lang]) || {};
  const merged = Object.assign({}, base, over);
  if (SITE_CONFIG && SITE_CONFIG.contact && SITE_CONFIG.contact.hoursHtml && SITE_CONFIG.contact.hoursHtml[lang]) {
    merged['contact.hoursval'] = SITE_CONFIG.contact.hoursHtml[lang];
  }
  return merged;
}

function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '');
  return m ? `${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}` : null;
}

function applyTheme(theme) {
  const root = document.documentElement.style;
  const map = {
    gold: '--gold', goldLight: '--gold-light', black: '--black', dark: '--dark',
    darkCard: '--dark-card', darkBorder: '--dark-border', white: '--white'
  };
  Object.keys(map).forEach(k => { if (theme[k]) root.setProperty(map[k], theme[k]); });
  const rgb = hexToRgb(theme.gold);
  if (rgb) {
    root.setProperty('--gold-dim', `rgba(${rgb}, 0.15)`);
    root.setProperty('--gold-a04', `rgba(${rgb}, 0.04)`);
    root.setProperty('--gold-a20', `rgba(${rgb}, 0.2)`);
    root.setProperty('--gold-a25', `rgba(${rgb}, 0.25)`);
    root.setProperty('--gold-a30', `rgba(${rgb}, 0.3)`);
    root.setProperty('--gold-a40', `rgba(${rgb}, 0.4)`);
  }
}

function renderStats() {
  if (!SITE_CONFIG || !Array.isArray(SITE_CONFIG.stats)) return;
  const wrap = document.querySelector('.about-stats');
  if (!wrap) return;
  wrap.innerHTML = SITE_CONFIG.stats.map(s =>
    `<div class="stat"><span class="stat-num">${s.num}</span>` +
    `<span class="stat-label">${currentLang === 'en' ? (s.en || s.it) : s.it}</span></div>`
  ).join('');
}

function applySiteConfig() {
  if (!SITE_CONFIG) return;
  const name = (SITE_CONFIG.site && SITE_CONFIG.site.name) || document.title;
  document.title = name;
  const meta = document.getElementById('metaDescription');
  if (meta && SITE_CONFIG.site && SITE_CONFIG.site.metaDescription) {
    const md = SITE_CONFIG.site.metaDescription;
    meta.setAttribute('content', md[currentLang] || md.it || meta.getAttribute('content'));
  }
  const brandLogo = SITE_CONFIG.branding && SITE_CONFIG.branding.logo;
  if (brandLogo) {
    document.querySelectorAll('.nav-logo-circle img, .hero-logo-img, .about-visual img, .footer-logo')
      .forEach(img => img.setAttribute('src', brandLogo));
  }
  if (SITE_CONFIG.branding && SITE_CONFIG.branding.shape === 'square') {
    document.body.classList.add('logo-square');
  }
  if (SITE_CONFIG.sections && SITE_CONFIG.sections.drinks === false) {
    document.querySelectorAll('.hero-btns a[href="#drinks"]').forEach(a => { a.style.display = 'none'; });
    const ds = document.getElementById('drinks');
    if (ds) ds.style.display = 'none';
    const dl = document.querySelector('.nav-links a[href="#drinks"]');
    if (dl && dl.closest('li')) dl.closest('li').style.display = 'none';
  }
  if (SITE_CONFIG.order && SITE_CONFIG.order.url) {
    document.querySelectorAll('[data-order-link]').forEach(a => a.setAttribute('href', SITE_CONFIG.order.url));
  } else if (SITE_CONFIG.order) {
    // Sito senza ordini online: nascondi i bottoni invece di linkare il sito sbagliato
    document.querySelectorAll('[data-order-link]').forEach(a => { a.style.display = 'none'; });
  }
  if (SITE_CONFIG.contact) {
    const addr = document.getElementById('contactAddress');
    if (addr && SITE_CONFIG.contact.addressHtml) addr.innerHTML = SITE_CONFIG.contact.addressHtml;
    const phone = document.getElementById('contactPhoneLink');
    if (phone) {
      if (SITE_CONFIG.contact.phoneDisplay) phone.textContent = SITE_CONFIG.contact.phoneDisplay;
      if (SITE_CONFIG.contact.phoneHref) phone.setAttribute('href', SITE_CONFIG.contact.phoneHref);
    }
  }
  const brand = document.getElementById('footerBrand');
  if (brand) brand.textContent = '© ' + new Date().getFullYear() + ' ' + name;
  const theme = SITE_CONFIG.theme;
  if (theme) applyTheme(theme);
  if (SITE_CONFIG.site && SITE_CONFIG.site.defaultLang) currentLang = SITE_CONFIG.site.defaultLang;
}

// ===== STATE =====
let currentLang = 'it';
let currentFilter = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', async () => {
  await loadSiteConfig();
  applySiteConfig();
  applyTranslations();
  renderLegend();
  renderStats();
  renderMenu();
  renderDrinks();
  setupNav();
  setupFilter();
  setupLangToggle();
  setupScrollReveal();
});

// Una voce può avere prezzi liberi [{label, labelEN, value}] oppure, in
// retrocompatibilità col formato pizzeria, trancio/mezza/teglia.
function renderPrices(p, t) {
  if (Array.isArray(p.prices)) {
    if (!p.prices.length) return '';
    return p.prices.map(x =>
      `<div class="price-pill">` +
      `<span class="price-pill-label">${currentLang === 'en' ? (x.labelEN || x.label) : x.label}</span>` +
      `<span class="price-pill-val">${x.value}</span></div>`
    ).join('');
  }
  if (!p.trancio && !p.mezza && !p.teglia) return '';
  return (
    `<div class="price-pill"><span class="price-pill-label">${t.trancio}</span>` +
    `<span class="price-pill-val">${p.trancio}</span></div>` +
    `<div class="price-pill"><span class="price-pill-label">${t.mezza}</span>` +
    `<span class="price-pill-val">${p.mezza}</span></div>` +
    `<div class="price-pill"><span class="price-pill-label">${t.teglia}</span>` +
    `<span class="price-pill-val">${p.teglia}</span></div>`
  );
}
// ===== RENDER MENU =====
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  const t = getStrings(currentLang);
  const all = getPizze();
  const items = currentFilter === 'all' ? all : all.filter(p => p.cat === currentFilter);
  items.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card reveal' + (p.special ? ' special' : '');
    card.style.animationDelay = (i * 0.04) + 's';
    const name = currentLang === 'en' ? p.nameEN : p.name;
    const desc = currentLang === 'en' ? p.descEN : p.desc;
    let badges = '';
    if (p.special) badges += `<span class="badge badge-special">${currentLang==='en'?'Special':'Speciale'}</span>`;
    if (p.cat === 'veggie') badges += `<span class="badge badge-veggie">Veggie</span>`;
    if (p.cat === 'seafood') badges += `<span class="badge badge-seafood">${currentLang==='en'?'Seafood':'Mare'}</span>`;
    if (p.spicy) badges += `<span class="badge badge-spicy">${currentLang==='en'?'Spicy':'Piccante'}</span>`;
    const priceHtml = renderPrices(p, t);
    card.innerHTML = `
      <div class="card-top">
        <span class="card-num">#${String(p.num).padStart(2,'0')}</span>
        <span class="card-name">${name}</span>
      </div>
      <p class="card-desc">${desc}</p>
      ${priceHtml ? `<div class="card-prices">${priceHtml}</div>` : ''}
      ${badges ? `<div class="card-badges">${badges}</div>` : ''}
    `;
    grid.appendChild(card);
  });
  setTimeout(() => grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')), 50);
}

// ===== RENDER DRINKS =====
function renderDrinks() {
  const grid = document.getElementById('drinksGrid');
  grid.innerHTML = '';
  getDrinks().forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'drink-card reveal';
    card.style.animationDelay = (i * 0.04) + 's';
    card.innerHTML = `
      <div class="drink-card-top">
        <span class="drink-name">${d.name}</span>
        <span class="drink-price">${d.price}</span>
      </div>
      <p class="drink-ingredients">${d.ingredients}</p>
    `;
    grid.appendChild(card);
  });
  setTimeout(() => grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')), 50);
}

// ===== FILTER =====
// Se config.filters è presente, i bottoni filtro sono guidati dal sito
// (stesso stile, categorie diverse); altrimenti restano quelli statici in HTML.
function renderFilters() {
  const wrap = document.querySelector('.menu-filter');
  if (!wrap || !SITE_CONFIG || !SITE_CONFIG.filters) return false;
  const filters = SITE_CONFIG.filters;
  if (currentFilter && !filters.some(f => f.id === currentFilter)) {
    currentFilter = filters.length ? filters[0].id : 'all';
  }
  wrap.innerHTML = '';
  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (f.id === currentFilter ? ' active' : '');
    btn.dataset.cat = f.id;
    btn.textContent = f[currentLang] || f.it || f.id;
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      renderMenu();
    });
    wrap.appendChild(btn);
  });
  return true;
}

function setupFilter() {
  if (renderFilters()) return;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      renderMenu();
    });
  });
}

// Legenda prezzi: se config.menuLegend è assente resta l'HTML statico,
// se è un array viene renderizzata, se è null/false viene nascosta.
function renderLegend() {
  const legend = document.querySelector('.price-legend');
  if (!legend || !SITE_CONFIG || SITE_CONFIG.menuLegend === undefined) return;
  const cfg = SITE_CONFIG.menuLegend;
  if (!cfg) { legend.style.display = 'none'; return; }
  const items = cfg[currentLang] || cfg.it || [];
  legend.style.display = '';
  legend.innerHTML = items.map(s =>
    `<div class="price-legend-item"><span>${s}</span></div>`
  ).join('<div class="price-legend-sep">·</div>');
}

// ===== NAVBAR =====
function setupNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNav();
  }, { passive: true });
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

function updateActiveNav() {
  const sections = ['home','menu','drinks','about','contact'];
  const scrollY = window.scrollY + 100;
  let active = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY && el.style.display !== 'none') active = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + active);
  });
}

// ===== LANGUAGE =====
function setupLangToggle() {
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    applyTranslations();
    renderFilters();
    renderLegend();
    renderStats();
    renderMenu();
    renderDrinks();
  });
}

function applyTranslations() {
  const t = getStrings(currentLang);
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    // innerHTML solo per le stringhe che contengono markup (es. orari con <br/>)
    if (t[key].indexOf('<') !== -1) el.innerHTML = t[key];
    else el.textContent = t[key];
  });
  document.getElementById('langToggle').textContent = t['lang.btn'];
  const meta = document.getElementById('metaDescription');
  if (meta && SITE_CONFIG && SITE_CONFIG.site && SITE_CONFIG.site.metaDescription) {
    const md = SITE_CONFIG.site.metaDescription;
    meta.setAttribute('content', md[currentLang] || md.it || meta.getAttribute('content'));
  }
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  ['menuGrid','drinksGrid'].forEach(id => {
    const grid = document.getElementById(id);
    if (!grid) return;
    new MutationObserver(() => {
      grid.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    }).observe(grid, { childList: true });
  });

  document.querySelectorAll('.about-text, .about-visual, .contact-card, .section-header, .drink-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
