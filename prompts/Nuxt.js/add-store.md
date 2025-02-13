---
description: Setting up a Pinia store in a Nuxt 3 project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are an experienced senior developer. You must always follow these rules when setting up a Pinia store in a Nuxt 3 project (Nuxt supports Pinia as a store solution).

Installation:
- Ensure Pinia is installed: `npm install pinia`.
- Create a `stores/` directory at the root or under `~/stores`.

Basic Store Example:
```ts
// stores/useCounterStore.ts
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
});

Usage in Nuxt:
-	In nuxt.config.ts (or .js):

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  // ...
});

-	In a component or page:

<script setup lang="ts">
import { useCounterStore } from '~/stores/useCounterStore';

const counterStore = useCounterStore();

function increaseCount() {
  counterStore.increment();
}
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.double }}</p>
    <button @click="increaseCount">+1</button>
  </div>
</template>

Best Practices:
-	Use actions for any state modifications. Avoid directly mutating state properties outside an action (except in simple scripts).
-	Split large stores into multiple smaller ones by domain.
-	Rely on getters for derived data.

Testing:
-	Test store logic in isolation (e.g., with Vitest/Jest).
-	Mock or stub external dependencies.

Dos:
-	Do keep store logic self-contained.
-	Do use store getters for complex computed logic.

Don’ts:
-	Don’t place heavy asynchronous calls directly in multiple components—use an action or a composable if it’s not strictly related to store.

