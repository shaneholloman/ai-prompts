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

# add-store.mdc

You are creating a **Svelte store**:

1) File
   - `src/stores/user.js`.

2) Example
   ```js
   import { writable } from 'svelte/store';

   export const user = writable({ loggedIn: false, name: '' });

   export function logIn(name) {
     user.set({ loggedIn: true, name });
   }

   export function logOut() {
     user.set({ loggedIn: false, name: '' });
   }
   ```

3) Usage
   ```html
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
   ```

**Dos**
- Do keep store logic in separate files.  
- Do create helper functions to set or update the store if needed.

**Don’ts**
- Don’t store large arrays without reason.  
- Don’t forget unsubscribing if manually subscribing in scripts.

---