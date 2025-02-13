---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Single File Components
 - Each .svelte file is self-contained (template, script, style).
- Reactivity
 - Use the $: label for reactive statements.
 - Use stores for global/shared state.
- Props
 - Declare props with export let propName.
- Lifecycle
 - Use onMount, beforeUpdate, afterUpdate, onDestroy for side effects.
- Actions
 - Use actions (use:someAction) for DOM manipulation or event management.
- Performance
 - Key your {#each} blocks to help Svelte track items.
- Testing
 - Use svelte-testing-library or Cypress for E2E.

Dos:
- Do use Svelte’s built-in transitions when possible.
- Do keep data fetch logic in onMount or external modules.

Don'ts:
- Don't do manual DOM queries if you can use data binding or actions.
- Don't mutate props passed from a parent directly.