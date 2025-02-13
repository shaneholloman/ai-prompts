---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Svelte store:
  - File: src/stores/user.js.
- Example:
  ```js
  import { writable } from 'svelte/store';

  export const user = writable({ loggedIn: false, name: '' });

  export function logIn(name) {
    user.set({ loggedIn: true, name });
  }

  export function logOut() {
    user.set({ loggedIn: false, name: '' });
  }

	•	Usage:

<!-- Navbar.svelte -->
<script>
  import { user, logIn, logOut } from './stores/user.js';
</script>

<nav>
  {#if $user.loggedIn}
    <span>Welcome, {$user.name}!</span>
    <button on:click={logOut}>Logout</button>
  {:else}
    <button on:click={() => logIn('Alice')}>Login</button>
  {/if}
</nav>


	•	Dos:
	•	Do keep store logic in separate files.
	•	Do create helper functions to set or update the store if needed.
	•	Don’ts:
	•	Don’t store large arrays without reason.
	•	Don’t forget unsubscribing if manually subscribing in scripts.

