# Quincy Townhomes — Site Handoff

A single-page leasing landing page for **Quincy Townhomes** (4372 S 900 E, Millcreek, UT 84124).
Built with **Astro + Tailwind CSS v4**. Static output — no server, no database.

---

## Run it locally

```bash
cd site
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Node 20+ recommended (CI uses Node 20 via `netlify.toml`).

---

## Where everything lives

```
site/
├── src/
│   ├── data/property.ts        ← ALL property facts (edit this first)
│   ├── pages/
│   │   ├── index.astro         ← the page (assembles all sections)
│   │   ├── thanks.astro        ← form success page
│   │   └── 404.astro
│   ├── layouts/Base.astro      ← <head>, SEO, fonts, structured data
│   ├── components/             ← one file per section (Hero, Gallery, …)
│   ├── styles/global.css       ← brand colors + theme tokens
│   └── assets/
│       ├── photos/             ← hero + 12 gallery photos
│       ├── floorplans/         ← level-1/2/3.jpg
│       └── availability-map.jpg
└── public/                     ← favicon, robots.txt, apple-touch-icon
```

---

## Update content (no code knowledge needed)

**`src/data/property.ts` is the single source of truth.** Almost every change happens here.

- **Rent, fees, phone, links** — edit the matching field.
- **Fill in a TBD** — fields wrapped with `tbd('…')` render a small amber placeholder
  badge on the page so nothing ships as a silent guess. To finalize, change `tbd('Baths')`
  to `ok('2.5 Baths')` (or just `'2.5 Baths'` where it's a plain string). Search the file
  for **`TBD`** / **`tbd(`** to find every one.
- **Feature list, neighborhood bullets, what-you-pay rows** — edit the arrays.

### Outstanding TBDs to confirm before going public
1. **Bath count** (`baths`) and per-unit baths in `availability.units`
2. **Square footage** (`sqft`) and per-unit sqft
3. **Which units are actually available** — replace the placeholder `availability.units`
   array, then set `availability.isPlaceholder: false` to remove the warning banner
4. **Available / move-in date** (`availableDate`)
5. **Footer brokerage of record + license #** (`brokerage`)
6. Minor: `leaseLength`, `applicationFee`, `email`, pet deposit

---

## Add / remove / reorder photos

1. Drop the new `.jpg` into `src/assets/photos/`.
2. Open the relevant component:
   - **Hero photo** → `src/components/Hero.astro` (change the `import heroImg`).
   - **Gallery** → `src/components/Gallery.astro` — add an `import`, then add an
     `{ src, alt }` entry to the right group in the `groups` array. **Always write
     descriptive `alt` text** (what's pictured — it's used for accessibility + SEO).
3. To remove a photo, delete its entry from the `groups` array (and the import).

Images are optimized automatically at build time (resized, converted to WebP, lazy-loaded).
You don't need to compress anything by hand. Original full-res photos are preserved in the
project's `assets/photos/` folder (and `assets/photos/selected/`).

---

## Mark a unit as leased / available

In `src/data/property.ts`, edit `availability.units`. Each unit has a `status`:

```ts
{ unit: '4372 S 900 E #101', beds: '3', baths: '2.5', sqft: '1450', rent: '$2,499/mo', status: 'available' }
```

- Set `status: 'leased'` to take it off the available list (or just delete the entry).
- The site-plan **image** (`availability-map.jpg`) is static — if you want to recolor a unit
  on the map itself, replace that image file.

---

## The inquiry form

Uses **Netlify Forms** (no backend). It works automatically once deployed to Netlify —
submissions show up under **Netlify → Forms → "inquiry"**. Add a notification email there
(Netlify → Forms → Settings → Form notifications). On success, users land on `/thanks/`.

---

## Deploy / hosting

- Hosted on **Netlify**, auto-deploying from the GitHub repo's `main` branch.
- Build command `npm run build`, publish directory `dist/` (already set in `netlify.toml`).
- Push to `main` → Netlify rebuilds in ~1 minute.

### Swap the Netlify subdomain for a real domain later
1. Buy the domain (or use one you own).
2. Netlify → **Domain management → Add a domain** → follow the DNS instructions
   (point an `A`/`ALIAS` record or use Netlify DNS).
3. Netlify provisions HTTPS automatically.
4. **Update the production URL in two places** so SEO/OG/sitemap are correct:
   - `astro.config.mjs` → `site: 'https://yourdomain.com'`
   - `public/robots.txt` → the `Sitemap:` line
   Then redeploy.

---

## Notes / decisions made during the build

- **Mountain-view copy was removed** at the owner's request — the available photos didn't
  support the "Wasatch Mountains framed like artwork" line.
- The **availability map** is the project site plan (it had been saved under `assets/logos/`
  as `Quincy Townhomes_v23.jpg`). Legend = floorplan type (Unit 1 / Unit 2), not availability.
- **Logo**: the nav/footer use a styled wordmark (crisp + responsive at any size). The raster
  logo files live in the project `assets/logos/` if you'd prefer to swap one in.
- Lighthouse, accessibility (keyboard nav, focus states, Esc-to-close lightbox, alt text on
  every image), and SEO (title/description/OG/canonical/sitemap/robots/schema.org) are all in place.
