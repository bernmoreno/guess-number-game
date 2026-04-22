# Guess Number Game

A React + Vite number guessing game.

## 1) Run locally (development)

From the project folder:

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Open in browser: `http://localhost:5173/`

The app will auto-reload when you save changes.

## 2) Create production files

- Build optimized production files: `npm run build`

This creates a `dist/` folder containing files ready to deploy.

## 3) Preview production build in browser

- Run preview server: `npm run preview`
- Open the URL shown in terminal (usually `http://localhost:4173/`)

Use this to test the production build before deployment.

## 4) Add app to your website

### Option A: Host in a subfolder (recommended)

If your website URL should be:

- `https://yourdomain.com/guess-game/`

Then set `base` in `vite.config.js` to:

- `/guess-game/`

After changing base:

1. Run `npm run build` again.
2. Upload the contents of `dist/` to your website folder for `guess-game`.
3. Add a link from your website to `/guess-game/`.

### Option B: Host at domain root

If this app is your full site at `https://yourdomain.com/`, set base to `/` in `vite.config.js`, build, and upload `dist/` to your root hosting directory.

## 5) Deployment checklist

- [ ] `npm run build` completes without errors
- [ ] `dist/` folder uploaded to host
- [ ] Correct `base` path in `vite.config.js`
- [ ] App opens in browser without blank page or missing CSS/JS
- [ ] Refreshing the page still works

## Project scripts

- `npm run dev` → start development server
- `npm run build` → create production build in `dist/`
- `npm run preview` → preview production build locally
- `npm run lint` → run ESLint
