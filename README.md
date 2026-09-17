# portfolio

Personal portfolio built with Astro, React, TypeScript and Tailwind CSS. Dark-only, single-page layout, deployed to GitHub Pages via GitHub Actions.

## Stack

- [Astro](https://astro.build/) — static site generation
- [React](https://react.dev/) — used for interactive islands (section navigation)
- [TypeScript](https://www.typescriptlang.org/) — strict mode
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [devicon](https://devicon.dev/) — technology icons
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting and formatting

## Commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm install`          | Install dependencies                 |
| `npm run dev`          | Start the dev server                 |
| `npm run build`        | Build the production site to `dist/` |
| `npm run preview`      | Preview the production build         |
| `npm run check`        | Run type/diagnostics check           |
| `npm run lint`         | Lint the project with ESLint         |
| `npm run lint:fix`     | Lint and auto-fix issues             |
| `npm run format`       | Format the project with Prettier     |
| `npm run format:check` | Check formatting without writing     |

Prettier is configured with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`, so `.astro` files and Tailwind class ordering are formatted consistently.

## Dependency policy

`.npmrc` sets `min-release-age=14`, so npm refuses to install any package version published less than 14 days ago. This applies to local installs and to CI.

## Content

All content lives in typed data files under `src/data/`:

- `intro.ts` — name, role, description and links
- `timeline.ts` — education and work history
- `skills.ts` — languages and tech stack
- `projects.ts` — projects with image, links and tags

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

`.github/workflows/ci.yml` runs the same quality gates (lint, format, type check, build) on every pull request. To block merges until they pass, enable branch protection on `main` and require the **CI / verify** status check:

1. Go to **Settings → Branches → Add branch protection rule** (or a ruleset).
2. Target the `main` branch.
3. Enable **Require status checks to pass before merging** and select **CI / verify**.

Before the first deploy:

1. Update `site` in `astro.config.mjs` to your GitHub Pages URL (for example `https://<username>.github.io`).
2. Keep `base` set to the repository name (for example `/portfolio`) unless you use a custom domain, in which case set it to `/`.
3. In the repository, enable GitHub Pages with **Source: GitHub Actions**.
