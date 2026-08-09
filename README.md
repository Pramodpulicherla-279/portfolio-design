# Pramod Pulicherla — Portfolio

Personal portfolio for **Pramod Pulicherla**, SDET and full-stack developer. Built with React 19
and Vite, deployed to GitHub Pages.

**Live:** https://Pramodpulicherla-279.github.io/portfolio-design/

## Tech stack

- **React 19** + **Vite 6**
- Plain CSS with custom properties (light/dark theming, no UI framework)
- `react-icons` for iconography
- `gh-pages` for deployment

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Scripts

| Script            | What it does                                 |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                    |
| `npm run build`   | Production build into `dist/`                |
| `npm run preview` | Serve the production build locally           |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch |

## Project structure

```
index.html                 Vite entry HTML
vite.config.js             base path for GitHub Pages, dev server config
public/
  Pramod-Pulicherla-SDET.pdf   downloadable résumé
  favicon.svg
src/
  main.jsx                 React root
  App.jsx                  section composition
  index.css                design tokens, reset, shared primitives
  data/profile.js          ALL résumé content lives here
  hooks/
    useReveal.js           IntersectionObserver scroll reveal
    useTheme.js            light/dark toggle, persisted to localStorage
  components/
    Nav / Hero / About / Skills / Experience / Projects / Education / Contact
    ScrollProgress
```

## Updating content

Everything the site displays — summary, skills, experience bullets, projects, education, contact
details — comes from [`src/data/profile.js`](src/data/profile.js). Edit that one file; the
components render whatever it contains.

To swap the résumé PDF, replace `public/Pramod-Pulicherla-SDET.pdf` and update `profile.resumeFile`
if the filename changes.

## Deploying

```bash
npm run deploy
```

`vite.config.js` sets `base: '/portfolio-design/'` to match the repository name. If the repo is ever
renamed, or the site moves to a custom domain, update that value.
