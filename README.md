# Portfolio

Personal site of Kirill Ivanov, Senior Frontend Developer: https://kirill-ivanov.dev/

Built with Vite, React 19, MUI and i18next (EN / RU / SK).

## Development

```sh
npm ci
npm start        # dev server
npm run lint
npm run build    # outputs to build/
npm run preview  # serve the production build locally
```

## Content

- Texts for all sections live in `src/i18n/{en,ru,sk}.json`; keep the three files in sync.
- Tech stack chips and icons are in `src/components/Technologies.jsx`.
- Static files served as-is (CV PDF, favicon, OG image) are in `public/`.

## Deploy

Every push to `master` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`.
