# Gunabros static site

## Available Scripts (Vite)

In the project directory you can run the following npm scripts (uses Vite):

### `npm run dev`

Starts the Vite development server (hot module replacement). By default Vite runs on port 5173. The dev server configuration is in `vite.config.js` and is set to auto-open the browser.

The page will reload and update instantly when you make edits. If your environment or port differs, Vite will print the local URL in the console.

### `npm run build`

Builds the app for production to the `dist` folder using Vite. Files are optimized and hashed for caching.

### `npm run preview`

Locally preview the production build (serves the `dist` folder) using Vite's preview server.

### `npm run deploy`

Deploys the built static files in `./dist` to GitHub Pages using the `gh-pages` package. The current `deploy` script writes a `CNAME` into `dist` before publishing (see `package.json`).

## Notes & Links

- This project was migrated from Create React App to Vite. The tooling, dev server, and build output differ: Vite serves during development and outputs to `dist` by default.
- Vite docs: https://vitejs.dev/guide/
- Deploying static sites with Vite: https://vitejs.dev/guide/static-deploy.html
- React + Vite plugin (used here): https://github.com/vitejs/vite/tree/main/packages/plugin-react

### Tests

There are no tests currently set up in this repository.

### Advanced / Troubleshooting

- If you host on GitHub Pages under a repo path (e.g. `https://username.github.io/repo/`) set the `base` option in `vite.config.js` to your repo path (for example: `/repo/`). If you use a custom domain (CNAME), the deploy script already writes `dist/CNAME` before publishing.
- If you see any remaining Create React App references in the docs or files, search for `create-react-app` or `react-scripts` and update or remove them.

If you want, I can also update the repo README further with a short 'Try it' section including PowerShell commands for running and deploying locally.
