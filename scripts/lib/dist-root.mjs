import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const distBase = path.join(projectRoot, 'dist');

/** Astro static output is usually `dist/`; @astrojs/cloudflare uses `dist/client/`. */
export function getDistRoot() {
  if (fs.existsSync(path.join(distBase, 'sitemap-0.xml'))) {
    return distBase;
  }
  const client = path.join(distBase, 'client');
  if (fs.existsSync(path.join(client, 'sitemap-0.xml'))) {
    return client;
  }
  if (fs.existsSync(path.join(distBase, 'index.html'))) {
    return distBase;
  }
  if (fs.existsSync(path.join(client, 'index.html'))) {
    return client;
  }
  return distBase;
}

export function distImagesDir() {
  const root = getDistRoot();
  if (path.basename(root) === 'client') {
    return path.join(root, 'images');
  }
  return path.join(distBase, 'images');
}
