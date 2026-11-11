# SmooTea775 · Mobile Bubble Tea (Reno & Sparks, NV)

Static website (HTML/CSS/JS, no build step) for SmooTea775. Built by Nexora Digital.

## Structure
- `index.html`: all sections (hero, Drink Lab menu, signatures, pop-ups, reels, catering, gallery, socials)
- `css/style.css`: styles; drink colours live in the `--c1/--c2/--c3` variables
- `js/menu-data.js`: **edit the menu here** (names, descriptions, colours, toppings, cream clouds)
- `js/main.js`: interactions (page re-theming, cup builder, reels, lightbox, catering form)
- `assets/img`, `assets/video`: flyers, logo and reels

## Updating
- New drink: add an object to the right category in `js/menu-data.js`.
- New pop-up: edit the "Recent stops" timeline in `index.html` (`#popups`).
- Catering form opens the visitor's email app addressed to info@smootea775.com.

## Deploy
Push to GitHub → import the repo in Vercel → Framework: **Other**, no build command, output dir `/`.
