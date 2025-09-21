# EggTimer

Lightweight Egg Timer web app organized for scalability.

## Project structure

- `public/` — static assets (images, favicons)
- `src/` — source code
  - `src/default/` — default UI variant (HTML/CSS/JS)
  - `src/reportman/` — alternative UI variant
  - `src/components/` — reusable UI parts (planned)
  - `src/assets/` — images, fonts
  - `src/utils/` — helper modules (planned)
- `tests/` — unit/integration tests (planned)

## Local development

Open `src/default/index.html` or `src/reportman/index.html` in a browser to run locally.

Recommended (node + static server):

```powershell
# from project root
npx http-server . -c-1
# or install serve: npm i -g serve; serve .
```

## Suggested next features

- Modularize UI into `src/components/` and a simple bundler (Vite) for development.
- Add `localStorage` support for user preferences (last preset, theme, volume).
- Provide unit tests for timer logic using Jest.
- Add GitHub Actions workflow to run tests on PRs.
- Improve accessibility (ARIA, keyboard controls) and add i18n support.

If you'd like, I can implement any of these. I started a tracked todo list and can pick the next item to implement.
