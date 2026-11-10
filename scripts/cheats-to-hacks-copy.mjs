import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skipDirs = new Set(['node_modules', 'dist', '.git', '.astro', 'new-assets']);
const exts = new Set(['.ts', '.astro', '.tsx', '.md', '.json', '.mjs', '.xml']);

const slugMap = {
  'apex-legends-cheat-settings-explained': 'apex-legends-hack-settings-explained',
  'software-cheats-vs-cloud-dma-tradeoffs': 'software-hacks-vs-cloud-dma-tradeoffs',
  'apex-legends-cheat-troubleshooting-basics': 'apex-legends-hack-troubleshooting-basics',
  'apex-legends-cheat-performance-and-pc-load': 'apex-legends-hack-performance-and-pc-load',
  'apex-legends-cheat-vocabulary': 'apex-legends-hack-vocabulary',
};

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (exts.has(path.extname(ent.name))) files.push(p);
  }
  return files;
}

function transform(text) {
  let s = text;
  s = s.replace(/anti-cheat/gi, (m) => `__ANTI_CHEAT_${m.length}__`);
  for (const [oldSlug, newSlug] of Object.entries(slugMap)) {
    s = s.replaceAll(oldSlug, newSlug);
  }
  const replacers = [
    [/CHEATS/g, 'HACKS'],
    [/Cheats/g, 'Hacks'],
    [/cheats/g, 'hacks'],
    [/CHEAT/g, 'HACK'],
    [/Cheat/g, 'Hack'],
    [/cheat/g, 'hack'],
  ];
  for (const [re, to] of replacers) s = s.replace(re, to);
  s = s.replace(/__ANTI_CHEAT_9__/gi, 'anti-cheat');
  s = s.replace(/__ANTI_CHEAT_10__/gi, 'Anti-cheat');
  return s;
}

const targets = [
  path.join(root, 'src'),
  path.join(root, 'docs'),
  path.join(root, 'public', 'site.webmanifest'),
  path.join(root, 'public', 'robots.txt'),
  path.join(root, 'data', 'reviews.json'),
].flatMap((t) => {
  if (!fs.existsSync(t)) return [];
  const st = fs.statSync(t);
  if (st.isFile()) return [t];
  return walk(t);
});

let changed = 0;
for (const file of targets) {
  if (file.includes('cheats-to-hacks-copy.mjs')) continue;
  if (file.includes('checkout-redirects')) continue;
  const raw = fs.readFileSync(file, 'utf8');
  const next = transform(raw);
  if (next !== raw) {
    fs.writeFileSync(file, next);
    changed++;
    console.log('Updated', path.relative(root, file));
  }
}

console.log(`Done. ${changed} file(s) updated.`);
