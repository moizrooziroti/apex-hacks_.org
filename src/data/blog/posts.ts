import type { BlogPostFull } from './types';
import { BUY_URLS, PRIMARY_BUY_URL } from '../../config/checkout';
import { EXTRA_WEBP, SITE_WEBP } from '../../config/siteMedia';

function cta(title: string, text: string, href: string) {
  return { type: 'cta' as const, title, text, href };
}

function p(text: string) {
  return { type: 'p' as const, text };
}

function h2(text: string) {
  return { type: 'h2' as const, text };
}

function h3(text: string) {
  return { type: 'h3' as const, text };
}

function ul(items: string[]) {
  return { type: 'ul' as const, items };
}

function fig(src: string, alt: string, caption?: string) {
  return { type: 'figure' as const, src, alt, caption };
}

/** Keyword-focused articles. Slugs stay stable so product and forum links keep working. */
export const blogPosts: BlogPostFull[] = [
  {
    tag: 'Articles',
    title: 'How Apex Legends hacks work on PC — loader, ESP, aimbot (2026)',
    slug: 'how-apex-legends-hacks-work',
    image: SITE_WEBP.aimbotAlt,
    desc: 'What people mean by Apex Legends hacks in 2026: loaders, ESP, aimbot-style assist, wallhack-style visuals, and why listings change after patches.',
    date: 'Nov 7, 2026',
    readTime: '11 min read',
    featured: true,
    body: [
      h2('What Apex Legends hacks usually include'),
      fig(
        SITE_WEBP.hackVisuals,
        'Apex Legends overlay-style visuals — editorial illustration',
        'Menus differ by seller. Treat screenshots as examples.',
      ),
      p(
        'If you landed on apex-hacks.org, you are probably comparing Apex Legends hacks before opening checkout. Sellers usually bundle three ideas: on-screen intel (ESP), crosshair help (aimbot or aim assist), and see-through outlines (wallhack or chams). A loader verifies your key and pulls the build that matches today’s listing.',
      ),
      p(
        'This page is a buyer’s map of those words. It is not a promise that any tool stays compatible, and it does not claim a detection status. Third-party software can break Apex Legends rules and can cost you the account.',
      ),
      h2('Loader, menu, and updates'),
      p(
        "After checkout you typically get a download or a portal login. The menu is where ESP colors, aimbot FOV, and wallhack line weight live. When the game's publisher ships a Apex Legends update, that build can stop working until the seller posts a new one. Read the listing update note before you play on patch day.",
      ),
      ul([
        'Keep the installer and the order email in one folder.',
        'Write down the build number the seller says is current.',
        'Change one setting at a time so you know what you edited.',
      ]),
      h2('ESP on Apex Legends'),
      p(
        'Apex Legends ESP is the label for boxes, names, distances, skeletons, or streak markers the normal HUD does not draw. Useful configs stay readable: fewer colors, a distance cap, and only the labels you actually miss. Compare that with [ESP vs aimbot vs wallhack](/articles/apex-esp-vs-aimbot-vs-wallhack/).',
      ),
      h2('Aimbot and aim assistance'),
      p(
        'A Apex Legends aimbot or aim-assist module limits how far from your crosshair it looks (FOV), how fast it moves (smoothing), and which bone it prefers. It does not remove ping, peek timing, or bad crosshair height. See [aimbot settings and missed shots](/articles/apex-aimbot-settings-and-overaim/).',
      ),
      h2('wallhack-style visuals'),
      p(
        'wallhack, chams, and glow are marketing names for seeing a silhouette through geometry. Thick lines read on dark sites and wash out on bright ones. [wallhack readability](/articles/apex-wallhack-config-readability/) covers that tradeoff.',
      ),
      h2('How this differs from Cloud DMA and a spoofer'),
      p(
        'Software hacks run on the same PC as the game. [Cloud DMA](/articles/what-is-cloud-dma-for-apex-legends/) is a separate hardware path. An [HWID spoofer](/articles/what-is-an-hwid-spoofer-for-apex-legends/) is about hardware identifiers, not ESP. Do not buy one product expecting the other.',
      ),
      cta(
        'Apex Legends hacks checkout',
        'Buy opens the live partner listing in this tab — confirm modules before you pay.',
        BUY_URLS.hacks,
      ),
      h2('Before you pay'),
      p(
        'Run the [buying checklist](/articles/buying-apex-legends-hacks-checklist/): what is included, how updates work, and what the refund text actually says.',
      ),
    ],
  },
  {
    tag: 'Articles',
    title: 'Apex Legends ESP vs aimbot vs wallhack guide: compare features',
    slug: 'apex-esp-vs-aimbot-vs-wallhack',
    image: SITE_WEBP.hackMisc,
    desc: 'A plain split of Apex Legends ESP, aimbot, and wallhack so a product page is easier to read before checkout.',
    date: 'Nov 6, 2026',
    readTime: '9 min read',
    body: [
      h2('Why the labels overlap'),
      fig(EXTRA_WEBP.r5, 'Apex Legends intel overlay — illustrative'),
      p(
        'Listings often say “ESP wallhack aimbot” in one line. Those are different jobs. ESP answers where someone or a team is. Aimbot changes how the crosshair travels. wallhack changes how you see through cover.',
      ),
      h2('Apex Legends ESP'),
      p(
        'Player boxes, health, distance, legend name, and shield/readout tags. It is still a flat overlay. It does not aim for you and it does not replace sound.',
      ),
      h3('When ESP is the main feature'),
      p(
        'Players who want information and already aim themselves look for ESP-only or visuals-first menus. Start with [ESP customization](/articles/apex-esp-customization-tips/) if the screen gets noisy.',
      ),
      h2('Apex Legends aimbot'),
      p(
        'Smoothing, FOV, bone priority, sometimes a second aim key. The module still starts from where you are already looking. Wide FOV feels sticky; narrow FOV needs better crosshair placement.',
      ),
      h2('Apex Legends wallhack'),
      p(
        'Outlines or filled shapes through walls. Pair with [line weight tips](/articles/apex-wallhack-config-readability/). A bundle that includes all three is a price package, not proof you need every toggle — see [how to choose](/articles/how-to-choose-apex-legends-hacks/).',
      ),
      cta('Hacks checkout', 'Feature names on the partner page are the source of truth.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Articles',
    title: 'Best Apex Legends Buy Guide: Choose Hacks in 2026 (ESP, Aimbot, or DMA)',
    slug: 'how-to-choose-apex-legends-hacks',
    image: SITE_WEBP.espWorldAlt,
    desc: 'Pick a Apex Legends hack by role and hardware: software ESP and aimbot versus Cloud DMA, without hype counters.',
    date: 'Nov 5, 2026',
    readTime: '8 min read',
    body: [
      h2('Start with the round you play'),
      fig(EXTRA_WEBP.r3, 'Apex Legends tactical context — illustrative'),
      p(
        'Fragger players often look at aimbot feel. IGL and support players often care more about team and loot ESP plus wallhack readability. There is no universal best Apex Legends hack.',
      ),
      h2('Software hack or Cloud DMA'),
      p(
        'A software loader is the usual path for ESP and aimbot. Cloud DMA is extra hardware and cabling. Read [software vs DMA](/articles/software-hacks-vs-cloud-dma-tradeoffs/) and [FPS load](/articles/apex-legends-hack-performance-and-pc-load/) before you spend on a second PC.',
      ),
      h2('Questions for the listing'),
      ul([
        'Which Apex Legends build is supported right now?',
        'Does the key cover one PC?',
        'Where do updates show up after a patch?',
        'What does the refund line actually allow?',
      ]),
      p(
        'Keep the HUD small. [ESP tips](/articles/apex-esp-customization-tips/) are the practical version of that advice.',
      ),
      cta('Buy Apex Legends hacks', 'Default bundle checkout — compare other cards on the products hub after.', PRIMARY_BUY_URL),
    ],
  },
  {
    tag: 'Setup',
    title: 'Apex Legends Hack Settings Explained: FOV, Smoothing, and Bones',
    slug: 'apex-legends-hack-settings-explained',
    image: SITE_WEBP.hackAimbot,
    desc: 'What FOV, smoothing, bone priority, and ESP distance usually mean in a Apex Legends hack menu.',
    date: 'Nov 4, 2026',
    readTime: '8 min read',
    body: [
      h2('Aimbot FOV'),
      fig(EXTRA_WEBP.r4, 'Aim menu context — illustrative'),
      p(
        'FOV is how far from the center of the screen the aimbot will consider a target. A wide cone grabs more people and feels busy in close fights. A narrow cone only helps when your crosshair is already close.',
      ),
      h2('Smoothing'),
      p(
        'Smoothing spreads the mouse movement across frames. Low values feel sharp. High values feel late on fast swings. Test one gun for a few rounds before you copy a screenshot from someone else.',
      ),
      h2('Bone priority'),
      p(
        'Head versus chest is a hitbox choice, not a ranked guarantee. Some menus let you change priority by distance. The checkout page is the source for which options exist.',
      ),
      h2('ESP distance'),
      p(
        'A distance cap hides far labels so close threats stay readable. If you keep raising it, you are probably missing audio, not “range.”',
      ),
      p('Change one slider per session and write the number down.'),
      cta('Hacks checkout', 'Confirm the menu matches this vocabulary on the listing.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Setup',
    title: 'What Is an HWID Spoofer for Apex Legends?',
    slug: 'what-is-an-hwid-spoofer-for-apex-legends',
    image: SITE_WEBP.espWorld,
    desc: 'HWID spoofer meaning for Apex Legends: hardware identifiers, what a listing can and cannot promise, and how it differs from account appeals.',
    date: 'Nov 3, 2026',
    readTime: '7 min read',
    body: [
      h2('Hardware identifiers'),
      fig(EXTRA_WEBP.r9, 'PC hardware context — illustrative'),
      p(
        'A PC exposes stable IDs from the board, disks, and network adapters. Apex Legends and its anti-cheat stack can use hardware bans as one sanction. An HWID spoofer is software that tries to present different identifiers where that product says it does. Scope is on the checkout page, not in a forum rumor.',
      ),
      h2('Not an appeal and not an ESP'),
      p(
        "A spoofer does not draw ESP and it does not decide whether the game's publisher restores an account. For HWID scope, read the spoofer product page and checkout listing. We do not claim any bypass result.",
      ),
      h2('Read the listing first'),
      ul([
        'Which Windows versions are listed.',
        'Whether a reboot is required.',
        'Whether the tool is meant to run before the game client.',
      ]),
      cta('Spoofer product', 'Open the HWID spoofer checkout from the product page.', BUY_URLS.spoofer),
    ],
  },
  {
    tag: 'Features',
    title: 'Apex Legends Skin Changer: What It Changes (and What It Does Not)',
    slug: 'apex-legends-skin-changer-explained',
    image: SITE_WEBP.hackMisc,
    desc: 'Apex Legends skin changer tools in plain language: camos, operators, and cosmetic-only scope — not ESP or aimbot.',
    date: 'Nov 2, 2026',
    readTime: '7 min read',
    body: [
      h2('Cosmetic-only scope'),
      fig(EXTRA_WEBP.r6, 'Apex Legends loadout cosmetics — illustrative'),
      p(
        'A skin changer focuses on how guns and operators look on your screen or in your menu. It is a different buy from the main Apex Legends hacks bundle that lists ESP, aim assistance, and radar.',
      ),
      h2('Check the listing before you assume camos'),
      ul([
        'Which weapon slots the tool touches.',
        'Whether operators or blueprints are included.',
        'If changes are client-side only or synced in a way the listing describes.',
      ]),
      p(
        'Third-party cosmetics can still break game rules. Outcomes are your risk — we do not promise account status.',
      ),
      cta('Skin changer product', 'Open the skin changer checkout from the product page.', BUY_URLS.skinChanger),
    ],
  },
  {
    tag: 'Features',
    title: 'What Is Cloud DMA for Apex Legends?',
    slug: 'what-is-cloud-dma-for-apex-legends',
    image: SITE_WEBP.hackVisuals,
    desc: 'Cloud DMA for Apex Legends in plain language: a second-PC memory read path, not the same thing as an on-PC ESP loader.',
    date: 'Nov 1, 2026',
    readTime: '8 min read',
    body: [
      h2('DMA in one paragraph'),
      fig(EXTRA_WEBP.r7, 'External hardware path — illustrative'),
      p(
        'DMA hardware reads memory from a path outside the game PC’s normal hack loader. Cloud DMA adds a remote or hosted piece, depending on the seller. People compare it with Apex Legends ESP because both can show positions — the setup cost is not the same.',
      ),
      h2('What you should confirm on the listing'),
      ul([
        'Which firmware or bridge the page requires.',
        'Whether a second computer is mandatory.',
        'What the seller says about latency and region.',
      ]),
      p(
        'Next: [software hacks vs Cloud DMA](/articles/software-hacks-vs-cloud-dma-tradeoffs/).',
      ),
      cta('Cloud DMA', 'Hardware notes live on the checkout page.', BUY_URLS.cloudDma),
    ],
  },
  {
    tag: 'Articles',
    title: 'Hacks checklist 2026: buy Apex Legends safely on partner checkout',
    slug: 'buying-apex-legends-hacks-checklist',
    image: EXTRA_WEBP.r5,
    desc: 'A short checklist for buying Apex Legends hacks: included features, update policy, checkout domain, and account risk.',
    date: 'Oct 30, 2026',
    readTime: '7 min read',
    body: [
      h2('Checkout and delivery'),
      fig(SITE_WEBP.espWorldAlt, 'Product comparison context — illustrative'),
      ul([
        'The page is HTTPS and the domain matches the link you meant to open.',
        'You can see price, term length, and how the key arrives.',
        'You saved the refund paragraph before paying.',
      ]),
      h2('Feature scope'),
      ul([
        'ESP, aimbot, and wallhack are listed separately if they are separate.',
        'One PC or more is stated, not guessed.',
        'Supported game version is written down.',
      ]),
      h2('Risk'),
      p(
        'Apex Legends can restrict accounts that use third-party tools. Budget that before you buy. Start from the [four-card product hub](/products/) and open one listing at a time.',
      ),
      h2('After delivery'),
      p(
        'Save the installer path, the license email, and a screenshot of the refund paragraph the day you pay. If a patch breaks the build, you will know which version you purchased without guessing from a forum thread.',
      ),
      p(
        'Compare vendor language with [how Apex Legends loaders work](/articles/how-apex-legends-hacks-work/) and [software vs Cloud DMA tradeoffs](/articles/software-hacks-vs-cloud-dma-tradeoffs/) so you are not buying the wrong card.',
      ),
      cta('Open hacks checkout', 'Start with the main bundle listing, then compare spoofer, skin changer, or DMA if needed.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Setup',
    title: 'Apex Legends ESP Setup: Cleaner Overlays for Apex Legends',
    slug: 'apex-esp-customization-tips',
    image: EXTRA_WEBP.r9,
    desc: 'Apex Legends ESP tips: fewer colors, distance limits, and which labels to turn off when Apex Legends already gives you the sound cue.',
    date: 'Oct 28, 2026',
    readTime: '6 min read',
    body: [
      h2('Three colors is enough'),
      fig(SITE_WEBP.hackVisuals, 'ESP layer — editorial'),
      p(
        'Squad, threat, and care-package cues. Everything else can stay neutral. An Apex Legends ESP full of neon is harder to read in a gunfight than a quiet one.',
      ),
      h2('Distance and opacity'),
      p(
        'Fade labels past the range you can actually fight. Lower opacity on skeletons if boxes already show the angle.',
      ),
      h2('Sound still matters'),
      p(
        'If you hear the rotate, you do not need a second ESP line for the same event. Vocabulary for the rest of the menu is in [ESP vs aimbot vs wallhack](/articles/apex-esp-vs-aimbot-vs-wallhack/).',
      ),
      cta('Hacks listing', 'ESP options depend on the current build.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Setup',
    title: 'Apex Legends aimbot settings 2026: FOV, smoothing, ping & missed shots',
    slug: 'apex-aimbot-settings-and-overaim',
    image: EXTRA_WEBP.r3,
    desc: 'Apex Legends aimbot settings and missed shots: ping, crosshair height, FOV, and smoothing — not a magic slider.',
    date: 'Oct 26, 2026',
    readTime: '7 min read',
    body: [
      h2('The server still decides the hit'),
      fig(EXTRA_WEBP.r8, 'Crosshair context — illustrative'),
      p(
        'An Apex Legends aimbot moves your crosshair on your PC. The server validates the shot with your ping and the other player’s movement. Test on a stable connection before you blame FOV.',
      ),
      h2('Over-aim'),
      p(
        'Very low smoothing plus a panic flick overshoots. Slow the slider or slow your hand, then retest the same angle.',
      ),
      h2('Crosshair height'),
      p(
        'If you hold the floor, the aimbot spends the fight correcting you. Head-level habits matter even with aim assistance on. Settings names are in [FOV and smoothing](/articles/apex-legends-hack-settings-explained/).',
      ),
      h2('When to lower FOV first'),
      p(
        'If the crosshair snaps past the target and comes back, shrink FOV before you crank smoothing. Test on a private match at your normal Apex Legends sensitivity so the aimbot settings match muscle memory.',
      ),
      p(
        'Heavy packet loss makes every profile feel late. Fix routing or wait for a stable session before you rewrite the whole menu — otherwise you chase noise.',
      ),
      cta('Aim features on the listing', 'Exact toggles are on checkout.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Setup',
    title: 'Apex Legends wallhack Settings: Lines You Can Read on Site',
    slug: 'apex-wallhack-config-readability',
    image: EXTRA_WEBP.r7,
    desc: 'Apex Legends wallhack readability: thin versus thick outlines, lighting, and vertical sites.',
    date: 'Oct 24, 2026',
    readTime: '6 min read',
    body: [
      h2('Lighting changes the same preset'),
      fig(EXTRA_WEBP.r5, 'Visibility cue — illustrative'),
      p(
        'Bright outdoor zones hide thin wallhack lines. Dark interior rooms hide thick ones in the clutter. Keep two profiles if the menu allows it.',
      ),
      h2('Stairs and vertical plays'),
      p(
        'A flat outline does not tell you which floor someone is on. Check that your color or thickness still separates up from down on maps you queue.',
      ),
      cta('Open Apex Legends wallhack listing', 'wallhack options follow the seller’s menu.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Features',
    title: 'Software Hacks vs Cloud DMA for Apex Legends',
    slug: 'software-hacks-vs-cloud-dma-tradeoffs',
    image: EXTRA_WEBP.r8,
    desc: 'Apex Legends software hacks versus Cloud DMA: install simplicity, hardware cost, and what each listing is actually selling.',
    date: 'Oct 22, 2026',
    readTime: '8 min read',
    body: [
      h2('Software path'),
      fig(SITE_WEBP.espWorld, 'Overlay versus hardware — illustrative'),
      p(
        'A normal Apex Legends hack is a loader on the gaming PC: ESP, aimbot, wallhack, config saves. Setup is shorter. It shares CPU and GPU time with the game — see [performance](/articles/apex-legends-hack-performance-and-pc-load/).',
      ),
      h2('Cloud DMA path'),
      p(
        'DMA adds a bridge, often a second machine, and more steps when Apex Legends updates. The [Cloud DMA explainer](/articles/what-is-cloud-dma-for-apex-legends/) lists what to verify. It is not automatically “better” for a weekend player.',
      ),
      h2('How to decide'),
      p(
        'If you want ESP and aimbot with one install, start with the software hacks page. If you already own DMA gear and the listing matches it, read that page instead. Do not pay for both until you know which problem you have.',
      ),
      cta('Cloud DMA listing', 'Confirm hardware requirements before checkout.', BUY_URLS.cloudDma),
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Apex Legends Hack Not Working After a Patch? Basic Checks',
    slug: 'apex-legends-hack-troubleshooting-basics',
    image: EXTRA_WEBP.r6,
    desc: 'Apex Legends hack troubleshooting: game updates, fullscreen mode, admin rights, and waiting for the seller’s new build.',
    date: 'Oct 20, 2026',
    readTime: '6 min read',
    body: [
      h2('Patch day'),
      fig(SITE_WEBP.espWorld, 'PC troubleshooting — illustrative'),
      p(
        'Most “Apex Legends hack not working” reports start right after a Apex Legends update. The old loader is often the wrong build. Wait for the seller’s note instead of reinstalling Windows first.',
      ),
      h2('Display mode and permissions'),
      p(
        'Overlays attach differently in fullscreen and borderless. If the menu injects only when both the game and the loader are elevated, match what the documentation says — do not guess a mix.',
      ),
      h2('What to send support'),
      ul([
        'Windows version.',
        'Game build if you can see it.',
        'Loader version from the menu.',
        'One sentence on what you expected versus what happened.',
      ]),
      cta('See hacks compatibility page', 'Compatibility notes are on the listing.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Apex Legends Hack FPS Drop: Performance and PC Load',
    slug: 'apex-legends-hack-performance-and-pc-load',
    image: EXTRA_WEBP.r4,
    desc: 'Apex Legends hack FPS: measure a vanilla baseline, then ESP and aimbot one module at a time.',
    date: 'Oct 18, 2026',
    readTime: '6 min read',
    body: [
      h2('Baseline first'),
      fig(SITE_WEBP.hackMisc, 'Performance context — illustrative'),
      p(
        'Log Apex Legends FPS with the hack closed. Then enable ESP only. Then aimbot. A drop you cannot measure is a guess.',
      ),
      h2('Streaming and overlays'),
      p(
        'Capture software and a second overlay often cost more frame time than a simple box ESP. Turn extras off before you blame the hack menu.',
      ),
      h2('Heat'),
      p(
        'Thermal throttle feels like random aim drift. If clocks fall when the GPU is hot, fix cooling before you retune smoothing. Broader context is in [software vs DMA](/articles/software-hacks-vs-cloud-dma-tradeoffs/).',
      ),
      cta('Software hacks', 'Feature list on the product page.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Articles',
    title: 'Apex Legends Hack Glossary: ESP, Aimbot, HWID, DMA',
    slug: 'apex-legends-hack-vocabulary',
    image: EXTRA_WEBP.r5,
    desc: 'Short definitions for Apex Legends hack terms shoppers reuse: ESP, aimbot, wallhack, loader, HWID spoofer, and Cloud DMA.',
    date: 'Oct 16, 2026',
    readTime: '6 min read',
    body: [
      h2('Terms that show up on listings'),
      fig(SITE_WEBP.aimbotAlt, 'Aim assist context — illustrative'),
      ul([
        'ESP — extra on-screen info (boxes, names, shields).',
        'Aimbot / aim assist — crosshair help inside an FOV cone.',
        'wallhack / chams — visibility through cover.',
        'Loader — the app that checks your key and starts the build.',
        'HWID spoofer — identifier tooling; not ESP.',
        'Cloud DMA — off-PC memory read path with its own hardware list.',
      ]),
      h2('Use the same words in forums'),
      p(
        'Threads stay readable when everyone means the same feature. Start with [how Apex Legends hacks work](/articles/how-apex-legends-hacks-work/) and [ESP vs aimbot vs wallhack](/articles/apex-esp-vs-aimbot-vs-wallhack/).',
      ),
      cta('Hacks checkout', 'Ready to compare live modules?', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Articles',
    title: 'Apex Legends anti-cheat & patch nights: what buyers should expect in 2026',
    slug: 'apex-legends-anticheat-patch-nights-2026',
    image: EXTRA_WEBP.r7,
    desc: 'After Season drops and mid-season patches, loaders and overlays break first. How to read seller notes, avoid panic reinstalls, and budget downtime.',
    date: 'Nov 10, 2026',
    readTime: '9 min read',
    featured: false,
    body: [
      h2('Why patch nights flood forums'),
      fig(EXTRA_WEBP.r8, 'Patch-week desktop — editorial still'),
      p(
        'When Respawn ships a build, memory layouts and render hooks change. Software hacks that inject on the game PC are the first things that stop drawing ESP or refuse to open the menu. That is normal — it does not mean your key expired.',
      ),
      p(
        'apex-hacks.org does not host builds or status pages. Treat every “undetected” banner as marketing until the checkout listing shows a build number that matches today’s game version.',
      ),
      h2('A calm checklist for patch week'),
      ul([
        'Screenshot the supported build from checkout before you queue ranked.',
        'Watch the seller’s changelog channel — not random Discord reposts.',
        'Run one private match with overlays off if the menu loads but ESP is blank.',
        'Do not stack a spoofer, skin tool, and full ESP on the same boot without reading order docs.',
      ]),
      h2('Anti-cheat is broader than “VAC” headlines'),
      p(
        'Easy Anti-Cheat plus publisher-side checks mean account and hardware sanctions can both exist. No product on this site guarantees safety. If you need vocabulary for listings, start with the [hack glossary](/articles/apex-legends-hack-vocabulary/).',
      ),
      h2('Hardware paths still update, just slower'),
      p(
        'Cloud DMA listings depend on firmware and bridge notes that may lag software ESP by days. Compare [software vs DMA tradeoffs](/articles/software-hacks-vs-cloud-dma-tradeoffs/) before you buy gear you cannot return.',
      ),
      cta('Hacks checkout', 'See whether today’s modules are listed before you pay.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Articles',
    title: 'Ranked grind 2026: spend on intel, not menu clutter',
    slug: 'ranked-grind-prep-spending-on-hacks-2026',
    image: EXTRA_WEBP.r02,
    desc: 'Trending ranked prep for Apex: what ESP labels actually help rotation timing, when aim assist is noise, and how to avoid buying four tools for one problem.',
    date: 'Nov 9, 2026',
    readTime: '8 min read',
    body: [
      h2('One problem per purchase'),
      fig(SITE_WEBP.espWorldAlt, 'Ranked overlay — illustrative'),
      p(
        'Ranked queues reward audio and crosshair discipline more than neon HUDs. If you only lose fights because you misread third parties, a clean ESP distance cap beats buying aim assist, a skin pack, and DMA in the same week.',
      ),
      h2('Profiles you can actually revert'),
      p(
        'Save a “scrim” and a “ranked” config if the loader allows profiles. Scrim can show more debug lines; ranked should hide loot ESP and shrink FOV. Details live in [settings explained](/articles/apex-legends-hack-settings-explained/).',
      ),
      h2('Money traps trending on social clips'),
      ul([
        'Paying for “AI” labels that duplicate name ESP you already own.',
        'Buying a spoofer when you never had a hardware ban notice.',
        'DMA when you do not own a second PC or capture card headroom.',
      ]),
      p(
        'Use the [buying checklist](/articles/buying-apex-legends-hacks-checklist/) on the day you pay — not after a loss streak.',
      ),
      cta('Buy hacks bundle', 'Checkout shows the live module list for ranked seasons.', BUY_URLS.hacks),
    ],
  },
  {
    tag: 'Setup',
    title: 'Stream-proof overlays in 2026: what sellers mean (and do not mean)',
    slug: 'stream-proof-overlays-apex-legends-2026',
    image: SITE_WEBP.hackMisc,
    desc: 'Clips promise “stream proof” ESP. Here is how capture software, OBS game capture, and vendor claims interact — without pretending we tested your exact rig.',
    date: 'Nov 8, 2026',
    readTime: '7 min read',
    body: [
      h2('"Stream proof" is not a standard'),
      fig(EXTRA_WEBP.r9, 'Capture setup — editorial'),
      p(
        'Some menus hide from certain capture APIs or full-screen grabs. OBS Game Capture, browser sources, and driver-level recorders behave differently. A toggle that worked on last month’s OBS build may fail after a GPU driver update.',
      ),
      h2('What to test before you go live'),
      ul([
        'Record a 30-second local clip with the same OBS mode you stream with.',
        'Check whether Discord screen share shows the overlay — that is a separate code path.',
        'Turn off duplicate overlays (chat bots, stat panels) before blaming ESP.',
      ]),
      h2('Risk is still risk on camera'),
      p(
        'Even if viewers cannot see overlays, account sanctions still apply. Stream proof is a convenience feature on checkout, not permission to break rules. Pair with [performance tuning](/articles/apex-legends-hack-performance-and-pc-load/) so FPS does not crater mid-stream.',
      ),
      cta('See hacks listing', 'Stream-related toggles are named on the partner page.', BUY_URLS.hacks),
    ],
  },
];
