---
description: Creating a reusable composable in a Nuxt 3 project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Nuxt 3 developer. You must always follow these rules when creating a reusable composable (Vue’s Composition API) in a Nuxt 3 project.

Location:
- Place the composable in the `composables/` folder with a descriptive name, e.g. `useAuth.ts`.

Composition API:
- Use named exports that start with `use`, e.g. `export function useAuth() { ... }`.
- Return reactive state, computed properties, or functions for any common logic.

Example:
```ts
// composables/useAuth.ts
import { ref } from 'vue';
import { useRouter } from '#imports'; // auto-import in Nuxt 3

export function useAuth() {
  const isAuthenticated = ref(false);
  const router = useRouter();

  function login() {
    // do login
    isAuthenticated.value = true;
  }

  function logout() {
    // do logout
    isAuthenticated.value = false;
    router.push('/login');
  }

  return {
    isAuthenticated,
    login,
    logout
  };
}

Usage:
-	In any component:

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';

const { isAuthenticated, login, logout } = useAuth();
</script>

Best Practices:
-	Keep composables small, focusing on a single responsibility (e.g., user authentication, form management, data fetching).
-	If the composable grows large, break it into multiple composables.

Testing:
-	Write unit tests for composables. Mock any external modules (like useRouter) if necessary.
-	Ensure composables are covered by integration tests in pages or components.

Dos:
-	Do export only what’s needed.
-	Do handle error states or edge cases.

Don’ts:
-	Don’t overcomplicate composables with unrelated logic.
-	Don’t rely on global variables inside composables.

