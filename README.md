# Officina Slice — Website

Static restaurant website for Officina Slice pizzeria.

## Structure
```
officina-slice/
├── index.html        # Main SPA
├── styles.css        # All styles
├── script.js         # JS logic, menu data, i18n
└── assets/
    └── logo.png      # Restaurant logo
```

## Deploy to GitHub Pages (single site)
1. Create a new GitHub repository
2. Upload all files maintaining the folder structure
3. Go to Settings → Pages → Source: main branch, root `/`
4. Your site will be live at `https://<username>.github.io/<repo>/`

## Multi-site setup (same layout, N domains/menus)
GitHub Pages supports **one custom domain (CNAME) per repository**, so each
domain gets its own deploy repo, all generated from this template repo:

```
sites/<site-dir>/
├── config.json   # ALL site content: name, contacts, order URL, theme, i18n, menu, drinks
└── CNAME         # custom domain for that site
```

- `index.html` / `styles.css` / `script.js` = shared layout (identical for all sites).
  `script.js` loads `config.json` at runtime and falls back to the built-in
  Officina data if the file is missing.
- `config.json` at root = copy of the default site, so the current single-site
  deploy keeps working unchanged.

Add a new site:

1. `cp -r sites/demo-nuovo-sito sites/<nuovo-sito>` and edit its `config.json`
   (menu, contacts, order URL, theme) + `CNAME` + optional `assets/logo.png`
2. `node scripts/build.mjs --all` (or `--site <nuovo-sito>`)
3. Publish `dist/<site-id>/` to that domain's repo (Settings → Pages, root `/`)

Optional per-site fields in `config.json`:

- `theme` — accent/background palette; borders, glows and shadows are derived from `theme.gold`
- `branding.shape: "square"` — rounded-square logo containers for non-circular logos (default: circle)
- `sections.drinks: false` — hides the drinks section, nav item and hero CTA
- `order.url: ""` — hides every order button (no wrong links)
- `menuLegend: null` — hides the price legend (default: static HTML)
- `filters: [{ id, it, en }]` — menu category buttons, replaces the static ones
- `stats: [{ num, it, en }]` — About section numbers
- `menu[].prices: [{ label, labelEN, value }]` — free-form price pills
  (omitting `prices` keeps the pizzeria format `trancio` / `mezza` / `teglia`)
- `sites/<site>/assets/` — optional per-site logo, copied over the shared `assets/`

When you change the layout, edit the shared files once and rebuild all sites.

## Automatic deploy (GitHub Actions)
On every push to `main` the `Deploy sites` workflow rebuilds all sites and
pushes each `dist/<site-id>/` to its deploy repo (see `sites/deploy-targets.json`).
`officina-slice` is not mapped: it is already served from this repo's root.
Pull requests only run the `Validate sites` check (build + dry-run, no push).

One-time setup per new domain:

1. Create the deploy repo (e.g. `nuovo-sito-web`), public, empty.
2. In the deploy repo: Settings → Pages → Deploy from branch → `main`, root `/`.
3. Point the domain to GitHub Pages (DNS: `CNAME www → <owner>.github.io`;
   apex domain: `A` records per GitHub docs). The `CNAME` file is generated
   from `sites/<sito>/CNAME` at build time.
4. Create a token with write access to the deploy repos (fine-grained PAT,
   Contents: read+write) and save it in **this** repo as secret `DEPLOY_TOKEN`
   (Settings → Secrets and variables → Actions).
5. Set `"repo": "owner/nuovo-sito-web"` in `sites/deploy-targets.json`.
6. Push to `main` and check the Actions tab. If a site has no changes,
   its push is skipped.

## Features
- 🍕 20 pizzas from the handwritten menu
- 🌍 Italian/English language toggle
- 🔍 Category filter (Classiche, Speciali, Veggie, Mare)
- 📱 Mobile-first responsive design
- 🌙 Dark mode aesthetic
- ✨ Smooth scroll animations

## Customization
- Update prices and descriptions in `script.js`
- Update contact info in `index.html` contact section
- Replace `assets/logo.png` with any updated logo version
