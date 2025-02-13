format the prompt below with the following.


1. remove all bold ** markdown asterisk. not needed
2. remove the "#" h1 heading
Example:
```
# rule-nuxtjs.mdc <-- remove this header
```

3. add also the frontmatter header in this style:

Example:
```
---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
```

4. instead of writing adhere you change the role sentence (mostly first part) to "you are an .... senior developer. You must always follow these rules."
5. remove the numbers use this style of formatting

Example:
```
Project Structure:
- rule 1
 - rule 1.1
- rule 2
```
5. only output the rule, filename.mdc and format it to markdown code output
6. open it in canvas


PROMPT:

"""

# rule-svelte.mdc

You are an expert Svelte developer. Follow these rules:

1) Single File Components
   - Each `.svelte` file is self-contained (template, script, style).

2) Reactivity
   - Use the `$:` label for reactive statements. 
   - Use stores for global/shared state.

3) Props
   - Declare props with `export let propName`.

4) Lifecycle
   - Use `onMount`, `beforeUpdate`, `afterUpdate`, `onDestroy` for side effects.

5) Actions
   - Use actions (`use:someAction`) for DOM manipulation or event management.

6) Performance
   - Key your `{#each}` blocks to help Svelte track items.

7) Testing
   - Use svelte-testing-library or Cypress for E2E.

**Dos**
- Do use Svelte’s built-in transitions when possible.  
- Do keep data fetch logic in onMount or external modules.

**Don’ts**
- Don’t do manual DOM queries if you can use data binding or actions.  
- Don’t mutate props passed from a parent directly.

---