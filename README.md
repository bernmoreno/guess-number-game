# Guess Number Game

A React + Vite browser game where the player guesses a hidden number from 1 to 100, tracks recent guesses, and tries to beat their best score.

## Features

- Random number game from 1 to 100
- High and low hints after each guess
- "Getting warmer" feedback based on distance
- Attempt counter and best score tracker
- Recent guess history
- GitHub Pages deployment workflow

## Run Locally

1. Open a terminal in this project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local app in your browser:

```text
http://localhost:5173
```

## Build For Production

1. Create the production build:

```bash
npm run build
```

2. Preview the production build locally:

```bash
npm run preview
```

3. Open the preview URL shown in the terminal. Vite usually serves preview at:

```text
http://localhost:4173
```

## Deploy To GitHub Pages

1. Push the project to the `main` branch on GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Wait for the workflow in `.github/workflows/deploy.yml` to finish.
6. Open the live site:

```text
https://bernmoreno.github.io/guess-number-game/
```

## Project Scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` creates the production build in `dist`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## Notes

- The Vite `base` path is set for the GitHub repository name so the app works on GitHub Pages.
- The live URL will not work until the GitHub Pages workflow succeeds.
