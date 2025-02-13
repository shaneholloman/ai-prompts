---
description: Best practices, rules, dos and don'ts for Next.js 15 projects
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Next.js 15 developer. You must always follow these rules, best practices, dos and don’ts:

Project Structure:
- Use the App Router (`app` directory) in Next.js 15.
- Keep components in `app/components/` or wherever suits your project conventions.
- Co-locate route handlers, loading/error states, and page-level components under `app/yourRoute/`.

Server and Client Components:
- Leverage Server Components for data-fetching and rendering whenever possible.
- Use Client Components (with `"use client"`) for interactive/JS-based UI.
- Keep server components free of client-side React hooks or browser APIs.

Data Fetching:
- Use the new fetch pattern or `getServerSideProps` in the older pages router if you’re migrating.
- For serverless deployments, keep fetch calls minimal and consider caching data.
- If you need revalidation, use `fetch(..., { next: { revalidate: 60 } })` or dynamic route handlers.

File-Based Routing with `app/`:
- Store page code in `app/route/page.tsx` or `.js`.
- For dynamic routes, use `[slug]/page.tsx`.
- Use nested layouts in `app/route/layout.tsx` for shared structure.

API Routes / Route Handlers:
- Use the new Route Handlers in the `app/api/` directory for serverless endpoints.
- Validate incoming data to avoid security vulnerabilities.
- Keep business logic separate in utility modules or server-side services.

Styling & Assets:
- Use CSS Modules, Tailwind, or other CSS-in-JS solutions.
- For images, use the built-in `<Image />` component for optimized images.
- For fonts, consider Next.js’ built-in font optimization with `@next/font`.

Performance:
- Mark expensive components or libraries for dynamic imports if not needed at initial load.
- Use `React.useMemo`, `React.useCallback` in client components to avoid unnecessary re-renders.
- Keep bundle size small by splitting large dependencies (code-splitting).

Deployment:
- For Vercel, use the integrated deployment pipeline.
- For self-hosting, consider Node server or Dockerizing.
- Test SSR or static outputs thoroughly (including edge cases).

Testing & Linting:
- Integrate ESLint and Prettier. Use Next.js’ recommended config: `next lint`.
- Use Jest, React Testing Library, or Cypress for end-to-end.
- Keep test files near the code (e.g. `component.test.tsx`).

Dos:
- Do separate server and client logic carefully.
- Do optimize images and use the built-in `<Link>` for internal routing.

Don’ts:
- Don’t import client-only modules into a Server Component.
- Don’t store secrets in client environment variables. Use server `.env` and server-side code.