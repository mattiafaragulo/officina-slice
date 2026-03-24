/* ============================================
   OFFICINA SLICE — script.js
   ============================================ */

// ===== DATA =====
const PIZZE = [
  {
    num: 1, name: "Margherita", nameEN: "Margherita",
    desc: "Pomodoro, fior di latte, basilico",
    descEN: "Tomato sauce, fior di latte mozzarella, basil",
    price: "€8", cat: "classic"
  },
  {
    num: 2, name: "Pomodoro, Mozzarella & Salame Dolce", nameEN: "Tomato, Mozzarella & Sweet Salami",
    desc: "Base rossa, fior di latte, salame dolce",
    descEN: "Tomato base, mozzarella, sweet Italian salami",
    price: "€10", cat: "classic"
  },
  {
    num: 3, name: "Patate & Rosmarino", nameEN: "Potato & Rosemary",
    desc: "Base bianca, patate, rosmarino, olio EVO",
    descEN: "White base, sliced potatoes, rosemary, extra virgin olive oil",
    price: "€9", cat: "veggie", special: false
  },
  {
    num: 4, name: "Capricciosa", nameEN: "Capricciosa",
    desc: "Pomodoro, carciofi, funghi champignon, mozzarella, prosciutto cotto, granella di olive nere",
    descEN: "Tomato, artichokes, champignon mushrooms, mozzarella, cooked ham, crushed black olives",
    price: "€12", cat: "classic", special: true
  },
  {
    num: 5, name: "Crema di Zucca, Guanciale & Mozzarella", nameEN: "Pumpkin Cream, Guanciale & Mozzarella",
    desc: "Crema di zucca, guanciale, fior di latte, pomodorini affumicati",
    descEN: "Pumpkin cream, cured pork cheek, mozzarella, smoked cherry tomatoes",
    price: "€12", cat: "special", special: true
  },
  {
    num: 6, name: "Funghi Champignon, Mozzarella, Speck & Crema 4 Formaggi", nameEN: "Mushroom, Mozzarella, Speck & 4-Cheese Cream",
    desc: "Funghi champignon, fior di latte, speck, crema ai quattro formaggi",
    descEN: "Champignon mushrooms, mozzarella, speck, four-cheese cream",
    price: "€13", cat: "special", special: true
  },
  {
    num: 7, name: "Crema Pecorino, Guanciale, Mozzarella & Pepe Nero", nameEN: "Pecorino Cream, Guanciale, Mozzarella & Black Pepper",
    desc: "Crema di pecorino, guanciale, fior di latte, pepe nero, scaglie di pecorino",
    descEN: "Pecorino cream, guanciale, mozzarella, black pepper, pecorino shavings",
    price: "€13", cat: "special", special: true
  },
  {
    num: 8, name: "Bufala", nameEN: "Buffalo",
    desc: "Datterino in salsa, burrata, basilico, olio EVO",
    descEN: "Cherry tomato sauce, burrata, basil, extra virgin olive oil",
    price: "€13", cat: "special", special: true
  },
  {
    num: 9, name: "Parmigiana Scomposta", nameEN: "Deconstructed Parmigiana",
    desc: "Pomodoro, parmigiano, melanzane, burrata, basilico, olio EVO",
    descEN: "Tomato, parmesan, aubergine, burrata, basil, extra virgin olive oil",
    price: "€14", cat: "special", special: true
  },
  {
    num: 10, name: "Mortadella, Stracciatella & Granella Pistacchio", nameEN: "Mortadella, Stracciatella & Pistachio",
    desc: "Base bianca, mortadella, stracciatella di bufala, granella di pistacchio",
    descEN: "White base, mortadella, buffalo stracciatella, crushed pistachios",
    price: "€14", cat: "special", special: true
  },
  {
    num: 11, name: "Primavera", nameEN: "Primavera",
    desc: "Pomodorini freschi, rucola, grana padano",
    descEN: "Fresh cherry tomatoes, rocket salad, Grana Padano",
    price: "€11", cat: "veggie"
  },
  {
    num: 12, name: "Datterino Giallo, Stracchino Piccante & Stracciatella", nameEN: "Yellow Cherry Tomato, Spicy Stracchino & Stracciatella",
    desc: "Datterino giallo, stracchino piccante, stracciatella di bufala",
    descEN: "Yellow cherry tomatoes, spicy stracchino cheese, buffalo stracciatella",
    price: "€13", cat: "special", special: true, spicy: true
  },
  {
    num: 13, name: "Zucchine Julienne, Gamberi & Salsa Cocktail", nameEN: "Julienne Courgette, Prawns & Cocktail Sauce",
    desc: "Zucchine julienne, gamberi, salsa cocktail",
    descEN: "Julienne courgette, prawns, cocktail sauce",
    price: "€14", cat: "seafood"
  },
  {
    num: 14, name: "Ortolana", nameEN: "Garden Vegetable",
    desc: "Pomodoro, melanzane, zucchine, peperoni, fior di latte",
    descEN: "Tomato, aubergine, courgette, peppers, mozzarella",
    price: "€11", cat: "veggie"
  },
  {
    num: 15, name: "4 Formaggi", nameEN: "Four Cheeses",
    desc: "Fior di latte, gorgonzola, parmigiano, pecorino",
    descEN: "Mozzarella, gorgonzola, parmesan, pecorino",
    price: "€12", cat: "classic"
  },
  {
    num: 16, name: "Datterino Giallo, Crema Pistacchio & Tonno", nameEN: "Yellow Cherry Tomato, Pistachio Cream & Tuna",
    desc: "Datterino giallo, crema di pistacchio, tonno, cipolla arrostita",
    descEN: "Yellow cherry tomato, pistachio cream, tuna, roasted onion",
    price: "€14", cat: "seafood", special: true
  },
  {
    num: 17, name: "Pomodorini, Speck & Crema Parmigiano", nameEN: "Cherry Tomatoes, Speck & Parmesan Cream",
    desc: "Pomodorini, speck, crema di parmigiano, granella di olive nere",
    descEN: "Cherry tomatoes, speck, parmesan cream, crushed black olives",
    price: "€12", cat: "classic"
  },
  {
    num: 18, name: "Mascarpone, Porcini & Salsiccia Fresca", nameEN: "Mascarpone, Porcini & Fresh Sausage",
    desc: "Mascarpone, funghi porcini, salsiccia fresca",
    descEN: "Mascarpone, porcini mushrooms, fresh sausage",
    price: "€13", cat: "special", special: true
  },
  {
    num: 19, name: "Pomodoro, Mozzarella, Tonno & Cipolla", nameEN: "Tomato, Mozzarella, Tuna & Onion",
    desc: "Base rossa, fior di latte, tonno, cipolla",
    descEN: "Tomato base, mozzarella, tuna, onion",
    price: "€11", cat: "seafood"
  },
  {
    num: 20, name: "Prosciutto Cotto & Mozzarella", nameEN: "Cooked Ham & Mozzarella",
    desc: "Base bianca, prosciutto cotto, fior di latte",
    descEN: "White base, cooked ham, mozzarella",
    price: "€10", cat: "classic"
  }
];

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  it: {
    "nav.home": "Home", "nav.menu": "Menu", "nav.about": "About", "nav.contact": "Contatti",
    "hero.tagline": "Pizza artigianale · Cocktail d'autore",
    "hero.sub": "Dove la tradizione incontra il carattere",
    "hero.cta": "Scopri il Menu",
    "menu.label": "— Menu —", "menu.title": "Le Nostre Pizze",
    "menu.desc": "Impasto a lievitazione naturale, ingredienti selezionati",
    "filter.all": "Tutte", "filter.classic": "Classiche", "filter.special": "Speciali",
    "filter.veggie": "Veggie", "filter.seafood": "Mare",
    "about.label": "— Chi siamo —", "about.title": "L'Officina",
    "about.p1": "Officina Slice nasce dall'idea che una buona pizza debba essere un'esperienza completa: impasto curato, ingredienti freschi e un'atmosfera unica.",
    "about.p2": "Ogni pizza è un pezzo artigianale, preparata con passione e servita al trancio o intera. Abbinala ai nostri cocktail d'autore per un'esperienza indimenticabile.",
    "about.pizze": "Pizze", "about.artigianale": "Artigianale", "about.passione": "Passione",
    "contact.label": "— Trovaci —", "contact.title": "Contatti",
    "contact.where": "Dove siamo", "contact.hours": "Orari",
    "contact.hoursval": "Mar–Dom: 12:00–15:00\n18:00–23:30\nLunedì chiuso",
    "contact.phone": "Telefono", "contact.qr": "QR Menu",
    "contact.qrhint": "Scansiona per il menu digitale",
    "footer.love": "Fatto con ❤️ e farina",
    "lang.btn": "🇬🇧 EN"
  },
  en: {
    "nav.home": "Home", "nav.menu": "Menu", "nav.about": "About", "nav.contact": "Contact",
    "hero.tagline": "Artisan Pizza · Signature Cocktails",
    "hero.sub": "Where tradition meets character",
    "hero.cta": "Explore the Menu",
    "menu.label": "— Menu —", "menu.title": "Our Pizzas",
    "menu.desc": "Natural leavening dough, selected ingredients",
    "filter.all": "All", "filter.classic": "Classics", "filter.special": "Specials",
    "filter.veggie": "Veggie", "filter.seafood": "Seafood",
    "about.label": "— About us —", "about.title": "The Workshop",
    "about.p1": "Officina Slice was born from the idea that a great pizza should be a complete experience: carefully crafted dough, fresh ingredients, and a unique atmosphere.",
    "about.p2": "Every pizza is a handcrafted piece, prepared with passion and served by the slice or whole. Pair it with our signature cocktails for an unforgettable evening.",
    "about.pizze": "Pizzas", "about.artigianale": "Artisanal", "about.passione": "Passion",
    "contact.label": "— Find us —", "contact.title": "Contact",
    "contact.where": "Where we are", "contact.hours": "Hours",
    "contact.hoursval": "Tue–Sun: 12:00–15:00\n18:00–23:30\nMonday closed",
    "contact.phone": "Phone", "contact.qr": "QR Menu",
    "contact.qrhint": "Scan for the digital menu",
    "footer.love": "Made with ❤️ and flour",
    "lang.btn": "🇮🇹 IT"
  }
};

// ===== STATE =====
let currentLang = 'it';
let currentFilter = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupNav();
  setupFilter();
  setupLangToggle();
  setupScrollReveal();
  generateQR();
});

// ===== RENDER MENU =====
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  const items = currentFilter === 'all'
    ? PIZZE
    : PIZZE.filter(p => p.cat === currentFilter);

  items.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card reveal' + (p.special ? ' special' : '');
    card.dataset.cat = p.cat;
    card.style.animationDelay = (i * 0.04) + 's';

    const name = currentLang === 'en' ? p.nameEN : p.name;
    const desc = currentLang === 'en' ? p.descEN : p.desc;

    let badges = '';
    if (p.special) badges += `<span class="badge badge-special">${currentLang === 'en' ? 'Special' : 'Speciale'}</span>`;
    if (p.cat === 'veggie') badges += `<span class="badge badge-veggie">Veggie</span>`;
    if (p.cat === 'seafood') badges += `<span class="badge badge-seafood">${currentLang === 'en' ? 'Seafood' : 'Mare'}</span>`;
    if (p.spicy) badges += `<span class="badge badge-spicy">${currentLang === 'en' ? 'Spicy' : 'Piccante'}</span>`;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-num">#${String(p.num).padStart(2, '0')}</span>
        <span class="card-name">${name}</span>
        <span class="card-price">${p.price}</span>
      </div>
      <p class="card-desc">${desc}</p>
      ${badges ? `<div class="card-badges">${badges}</div>` : ''}
    `;
    grid.appendChild(card);
  });

  // Trigger reveal after render
  setTimeout(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 50);
}

// ===== FILTER =====
function setupFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      renderMenu();
    });
  });
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
  const sections = ['home', 'menu', 'about', 'contact'];
  const scrollY = window.scrollY + 100;
  let active = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) active = id;
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
    renderMenu();
  });
}

function applyTranslations() {
  const t = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.getElementById('langToggle').textContent = t['lang.btn'];
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Re-observe after filter changes
  const menuGrid = document.getElementById('menuGrid');
  const mutObs = new MutationObserver(() => {
    menuGrid.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  });
  mutObs.observe(menuGrid, { childList: true });

  // Reveal non-menu sections
  document.querySelectorAll('.about-text, .about-visual, .contact-card, .section-header').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== QR CODE (simple SVG-based) =====
function generateQR() {
  // Simple visual QR placeholder that looks like a real QR
  const container = document.getElementById('qrCode');
  if (!container) return;

  // Create a deterministic pattern based on the URL
  const size = 15;
  let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">`;
  svg += `<rect width="${size}" height="${size}" fill="white"/>`;

  // Fixed finder patterns (corners) — these are required in real QR codes
  const drawFinder = (x, y) => {
    svg += `<rect x="${x}" y="${y}" width="7" height="7" fill="black"/>`;
    svg += `<rect x="${x+1}" y="${y+1}" width="5" height="5" fill="white"/>`;
    svg += `<rect x="${x+2}" y="${y+2}" width="3" height="3" fill="black"/>`;
  };
  drawFinder(0, 0);
  drawFinder(8, 0);
  drawFinder(0, 8);

  // Pseudo-random data modules
  const seed = 42;
  const rand = (i) => ((seed * 1103515245 + i * 12345) & 0x7fffffff) / 0x7fffffff;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const inFinder = (r < 8 && c < 8) || (r < 8 && c >= 8) || (r >= 8 && c < 8);
      if (!inFinder && rand(r * size + c) > 0.5) {
        svg += `<rect x="${c}" y="${r}" width="1" height="1" fill="black"/>`;
      }
    }
  }
  svg += '</svg>';
  container.innerHTML = svg;
}
