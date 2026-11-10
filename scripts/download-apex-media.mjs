import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outDir = path.join(root, 'public', 'media');
const staging = path.join(root, 'new-assets');

const assets = [
  ['apex-legends-hero.mp4', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/ab1988f6-6996-419f-9473-af87100f8454/1793298421259-2exfnv-apex-legends.mp4', false],
  ['apex-legends-hero-poster.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003210157-cwvxth-apex5.webp', true],
  ['apex-screenshot-01.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003238685-a4vmq5-apex1.webp', true],
  ['apex-screenshot-02.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003231696-t0c5xq-apex2.webp', true],
  ['apex-screenshot-03.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003225576-4eg561-apex3.webp', true],
  ['apex-screenshot-04.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003219817-nccr83-apex4.webp', true],
  ['apex-screenshot-05.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003210157-cwvxth-apex5.webp', true],
  ['apex-screenshot-06.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003203633-f6ewkd-apex6.webp', true],
  ['apex-screenshot-07.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003198851-c7qwm7-apex7.webp', true],
  ['apex-screenshot-08.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003193733-q0tinq-apex8.webp', true],
  ['apex-screenshot-09.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003188637-j34pe5-apex9.webp', true],
  ['apex-screenshot-10.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003184194-lufz35-apex10.webp', true],
  ['apex-screenshot-11.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003173161-6s0phe-apex11.webp', true],
  ['apex-feature-aimbot.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/986c4da2-dda6-40d4-9002-5802ae47beb5/1793624428976-u4bnpw-zadeyo-apexlegends-3-aimbot.webp', true],
  ['apex-feature-world.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/986c4da2-dda6-40d4-9002-5802ae47beb5/1793624427544-x4dfbm-zadeyo-apexlegends-2-world.webp', true],
  ['apex-esp-world-a.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620126904-v14yfr-levo-apexlegends-3-world.webp', true],
  ['apex-aimbot-panel-a.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620125745-60sgf0-levo-apexlegends-2-aimbot.webp', true],
  ['apex-misc-menu.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620124757-d96htq-zadeyo-apexlegends-4-misc.webp', true],
  ['apex-esp-world-b.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620123410-xaqmni-zadeyo-apexlegends-3-world.webp', true],
  ['apex-aimbot-panel-b.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620122196-2tdoxv-zadeyo-apexlegends-2-aimbot.webp', true],
  ['apex-visuals-overlay.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620121267-0wpjbd-zadeyo-apexlegends-1-visuals.webp', true],
  ['apex-misc-tools.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619408928-qm9uyp-levo-apexlegends-4-misc.webp', true],
  ['apex-aimbot-panel-c.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619407783-vcqnec-levo-apexlegends-3-aimbot.webp', true],
  ['apex-esp-world-c.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619406859-x0jdk2-levo-apexlegends-2-world.webp', true],
  ['apex-visuals-hud.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619405875-aigtgi-levo-apexlegends-1-visuals.webp', true],
  ['apex-still-ap1.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1793916275158-vj28eh-ap1.webp', true],
  ['apex-still-ap2.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1793916321918-tnpvv4-ap2.webp', true],
  ['apex-still-ap4.webp', 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1793916474479-fq0411-ap4.webp', true],
];

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(staging, { recursive: true });

for (const [name, url, optimizeImage] of assets) {
  const dest = path.join(outDir, name);
  console.log('Fetching', name);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const stagingPath = path.join(staging, name);
  fs.writeFileSync(stagingPath, buf);

  if (optimizeImage && /\.webp$/i.test(name)) {
    const meta = await sharp(buf).rotate().toBuffer();
    await sharp(meta).webp({ quality: 82, effort: 4 }).toFile(dest);
  } else {
    fs.copyFileSync(stagingPath, dest);
  }
  console.log('Wrote', path.relative(root, dest));
}

console.log('Download complete.');
