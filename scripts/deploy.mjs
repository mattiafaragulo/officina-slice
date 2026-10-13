// Deploy dei siti precompilati (dist/<site-id>/) nei repo Pages dedicati.
// Config: sites/deploy-targets.json
//   { "<site-id>": { "repo": "owner/nome-repo" | "<url>", "branch": "main" } }
// Uso:
//   node scripts/build.mjs --all && node scripts/deploy.mjs [--dry-run] [--site <id>]
// Auth: env DEPLOY_TOKEN (PAT con scrittura sui repo di deploy) per i target
// "owner/nome-repo". I target in formato URL o path locale (es. /tmp/x.git)
// non richiedono token: utile per testare il push in locale.
// Ogni deploy è un push --force del contenuto di dist/: i repo di deploy sono
// artefatti usa-e-getta, la verità resta in questo repo (sites/*/config.json).
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const TARGETS_FILE = join(ROOT, 'sites', 'deploy-targets.json');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const siteFilter = args.includes('--site') ? args[args.indexOf('--site') + 1] : null;

function run(cmd, argv, cwd) {
  execFileSync(cmd, argv, { cwd, stdio: 'inherit' });
}
function out(cmd, argv, cwd) {
  return execFileSync(cmd, argv, { cwd, encoding: 'utf8' }).trim();
}
function headExists(dir) {
  try {
    execFileSync('git', ['rev-parse', '--verify', 'HEAD'], {
      cwd: dir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return true;
  } catch {
    return false;
  }
}

function remoteUrl(repo, token) {
  if (repo.startsWith('/') || repo.includes('://')) return repo;
  if (!token) throw new Error(`DEPLOY_TOKEN mancante per il target ${repo}`);
  return `https://x-access-token:${token}@github.com/${repo}.git`;
}

function deploySite(siteId, target, sha) {
  if (!target.repo) {
    console.log(`skip ${siteId}: repo non configurato in deploy-targets.json`);
    return 'skipped';
  }
  const dir = join(DIST, siteId);
  if (!existsSync(join(dir, 'index.html'))) {
    console.error(`skip ${siteId}: dist/${siteId}/ mancante, lancia prima "node scripts/build.mjs --all"`);
    process.exitCode = 1;
    return 'missing-dist';
  }
  const branch = target.branch || 'main';
  console.log(`${dryRun ? '[dry-run] ' : ''}deploy ${siteId} -> ${target.repo} (${branch})`);
  if (dryRun) return 'dry-run';
  const url = remoteUrl(target.repo, process.env.DEPLOY_TOKEN || '');

  run('git', ['init', '-b', branch], dir);
  run('git', ['config', 'user.name', 'github-actions[bot]'], dir);
  run('git', ['config', 'user.email', 'github-actions[bot]@users.noreply.github.com'], dir);
  run('git', ['add', '-A'], dir);
  const changed = out('git', ['status', '--porcelain'], dir);
  if (headExists(dir) && !changed) {
    console.log(`deploy ${siteId}: nessun cambiamento, push saltato`);
  } else {
    run('git', ['commit', '-m', `deploy ${siteId} from ${sha}`], dir);
    run('git', ['push', '--force', url, branch], dir);
  }
  return 'deployed';
}

const targets = JSON.parse(readFileSync(TARGETS_FILE, 'utf8'));
let sha = 'local';
try {
  sha = out('git', ['rev-parse', '--short', 'HEAD'], ROOT);
} catch {
  /* repo non git o git assente: resta 'local' */
}
const summary = {};
for (const [siteId, target] of Object.entries(targets)) {
  if (siteId.startsWith('_')) continue;
  if (siteFilter && siteId !== siteFilter) continue;
  summary[siteId] = deploySite(siteId, target, sha);
}
console.log(JSON.stringify({ dryRun, summary }));
