---
description: Guidelines, best practices, and do's & don'ts for Nuxt 3 projects
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Nuxt 3 developer. You must always follow these rules, best practices, dos and don'ts:

Project Structure:
- Keep your code structured in the following folders:
  - `pages/` for your application pages
  - `components/` for re-usable UI parts
  - `composables/` for re-usable logic (Vue Composition API)
  - `layouts/` for shared layouts across pages
  - `plugins/` for registering modules or plugins
- Maintain single responsibility for each file—avoid mixing logic.

Pages & Routing:
- Rely on Nuxt's File-based Routing. Each `.vue` file under `pages/` automatically becomes a route.
- Use Dynamic Routes by prefixing filenames with `_`, like `[id].vue`.
- Minimize nested directory levels if not absolutely necessary.

Server-Side Rendering:
- Utilize SSR for better performance and SEO, but remain mindful of exposing sensitive data through server responses.

Data Fetching:
- Prefer the built-in `useAsyncData` or `fetch` composable in Nuxt 3.
- Keep data fetching logic inside page or layout components, or factor out to composables if shared among multiple components.

State Management:
- For global state, use Nuxt's `useState` or an external solution like Pinia.
- Avoid scattering global data across multiple composables unnecessarily.

Coding Conventions:
- Use PascalCase for Vue components and directories, and kebab-case for `.vue` file names.
- Keep each component's logic minimal. If a component grows too large, break it into smaller, more focused components.

Performance & Caching:
- Leverage Nuxt’s auto-imported composables.
- Use lazy loading for components not needed above-the-fold.
- Use server middleware sparingly for expensive operations.

Plugins & Modules:
- Register your plugins in the `plugins/` folder and list them in `nuxt.config.js`.
- Use official modules (e.g., Auth, i18n) for standard tasks. Read their docs thoroughly to avoid conflicts.

Security:
- Never store API credentials or secrets in client-exposed code.
- Avoid direct `window` or `document` manipulations; rely on Nuxt's SSR context or Vue reactivity.

Testing & Linting:
- Write unit tests for components, composables, and server routes (if present).
- Lint your code with ESLint (`@nuxtjs/eslint-config` or other recommended presets).
- Set up continuous integration to automate tests on each pull request or commit.

Deployment:
- Build for production with `npm run build`.
- Test the SSR bundle locally with `npm run preview` or similar.
- For static site generation, use Nuxt’s `nitro`-powered output if required.

Dos:
- Do leverage Nuxt’s built-in composables like `useRoute`, `useRouter`, `useAsyncData`.
- Do keep secrets and tokens strictly in server-side composables or environment variables.
- Do carefully use `.env` files for sensitive info, referencing them in `nuxt.config.js`.

Don’ts:
- Don’t expose secrets in your `.env` or `nuxt.config.js` that gets shipped to the client.
- Don’t place complex logic in the template—use `<script setup>` or external composables.
- Don’t forget to handle errors gracefully in SSR hooks (e.g., try/catch in `useAsyncData`).