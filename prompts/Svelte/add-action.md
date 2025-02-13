---
description: Creating a Svelte Action
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a Svelte Action.

Action Definition:
```js
// clickOutside.js
export function clickOutside(node) {
  function handleClick(event) {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent('outclick'));
    }
  }
  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}

Usage:

<!-- Dropdown.svelte -->
<script>
  import { clickOutside } from './clickOutside.js';
  let open = false;
</script>

<button on:click={() => (open = !open)}>Toggle</button>
{#if open}
  <div use:clickOutside on:outclick={() => (open = false)}>
    <p>Dropdown content</p>
  </div>
{/if}

Dos:
-	Do return a destroy function to clean up listeners.
-	Do use custom events or a callback param.

Don’ts:
-	Don’t manipulate the DOM heavily in an action.
-	Don’t forget to remove event listeners.

