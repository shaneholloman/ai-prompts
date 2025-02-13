---
description: Creating a new SvelteKit page
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a new SvelteKit page.

Directory:
- Create a file under `src/routes/`, e.g. `src/routes/about/+page.svelte`.

Example:
```html
<!-- src/routes/about/+page.svelte -->
<script>
  export let data; // if you have load() from +page.js
  let message = 'About Page';
</script>

<h1>{message}</h1>
<p>This is the about page for our SvelteKit app.</p>

Load Function:

// src/routes/about/+page.js
export async function load() {
  return {
    props: {
      someData: 'Hello from the server'
    }
  };
}

-	Then in +page.svelte, export let data to access it.

Navigation:
-	Use SvelteKit’s <a href="/about">About</a> or the built-in $app/navigation for programmatic navigation.

Dos:
-	Do keep page-specific logic in +page.svelte.
-	Do use load for server data fetching if needed.

Don’ts:
-	Don’t store secrets in client-exposed data.
-	Don’t skip error handling in load functions.

