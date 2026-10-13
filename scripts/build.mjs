// Build multi-sito: stesso layout, contenuti diversi per ogni dominio.
// Uso:
//   node scripts/build.mjs --site officina-slice
//   node scripts/build.mjs --all [--out dist]
// Per ogni sito in sites/<dir>/config.json genera dist/<site-id>/ con:
//   index.html, styles.css, script.js (layout condiviso, identico)
//   config.json (contenuti del sito), CNAME (dominio), assets/ (logo)
// La cartella generata è pronta da pubblicare su GitHub Pages:
// un repository Pages per dominio (GitHub Pages supporta un solo CNAME per repo).
import { cpSync, copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITES_DIR = join(ROOT, 'sites');
const SHARED_FILES = ['index.html', 'styles.css', 'script.js'];

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { site: null, all: false, outDir: join(ROOT, 'dist') };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--site') out.site = args[++i];
    else if (args[i] === '--all') out.all = true;
    else if (args[i] === '--out') out.outDir = args[++i];
  }
  return out;
}

function listSites() {
  return readdirSync(SITES_DIR).filter((d) => {
    const p = join(SITES_DIR, d);
    return statSync(p).isDirectory() && existsSync(join(p, 'config.json'));
  });
}

function validate(siteDir, config) {
  const problems = [];
  if (!config.site || !config.site.name) problems.push('site.name mancante');
  if (!Array.isArray(config.menu) || config.menu.length === 0) problems.push('menu vuoto');
  const drinksOff = config.sections && config.sections.drinks === false;
  if (!drinksOff && (!Array.isArray(config.drinks) || config.drinks.length === 0)) problems.push('drinks vuoto');
  if (!existsSync(join(SITES_DIR, siteDir, 'CNAME'))) problems.push('CNAME mancante (dominio non configurato)');
  return problems;
}

function buildSite(siteDir, distRoot) {
  const raw = readFileSync(join(SITES_DIR, siteDir, 'config.json'), 'utf8');
  const config = JSON.parse(raw);
  const siteId = (config.site && config.site.id) || siteDir;
  const outDir = join(distRoot, siteId);
  mkdirSync(outDir, { recursive: true });

  for (const f of SHARED_FILES) copyFileSync(join(ROOT, f), join(outDir, f));
  copyFileSync(join(SITES_DIR, siteDir, 'config.json'), join(outDir, 'config.json'));

  const cname = join(SITES_DIR, siteDir, 'CNAME');
  if (existsSync(cname)) copyFileSync(cname, join(outDir, 'CNAME'));

  const siteAssets = join(SITES_DIR, siteDir, 'assets');
  const sharedAssets = join(ROOT, 'assets');
  if (existsSync(siteAssets)) cpSync(siteAssets, join(outDir, 'assets'), { recursive: true });
  else if (existsSync(sharedAssets)) cpSync(sharedAssets, join(outDir, 'assets'), { recursive: true });

  const problems = validate(siteDir, config);
  console.log(`ok  ${siteId}  (${config.menu.length} voci, ${(config.drinks || []).length} drink) -> ${outDir}`);
  for (const p of problems) console.log(`warn  ${siteId}: ${p}`);
  return { siteId, config, outDir };
}

const { site, all, outDir } = parseArgs();
const dirs = site ? [site] : all ? listSites() : [];
if (dirs.length === 0) {
  console.error('Uso: node scripts/build.mjs --site <dir> | --all [--out dist]');
  process.exit(1);
}
for (const d of dirs) {
  if (!existsSync(join(SITES_DIR, d, 'config.json'))) {
    console.error(`skip ${d}: sites/${d}/config.json non trovato`);
    continue;
  }
  buildSite(d, outDir);
}
console.log('\nDeploy: pubblica il contenuto di dist/<site-id>/ sul branch Pages del repo dedicato a quel dominio.');
