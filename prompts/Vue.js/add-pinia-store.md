---
description: Creating a Pinia store in Vue 3
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a Pinia store in Vue 3.

Setup:
- `npm install pinia` (if not installed).
- In main.ts:
```ts
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

Example Store:

// stores/useCounterStore.ts
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
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

Usage:

<script setup lang="ts">
import { useCounterStore } from '@/stores/useCounterStore';

const counterStore = useCounterStore();

function handleIncrement() {
  counterStore.increment();
}
</script>

<template>
  <p>Count: {{ counterStore.count }}</p>
  <button @click="handleIncrement">+1</button>
</template>

Dos:
-	Do keep store logic self-contained.
-	Do name the store function and ID clearly.

Don’ts:
-	Don’t do heavy DOM manipulation in Pinia actions.
-	Don’t forget to test store logic in isolation.

