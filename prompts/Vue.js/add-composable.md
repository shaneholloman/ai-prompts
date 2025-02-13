---
description: Creating a composable for Vue 3 (Composition API reuse)
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a Vue 3 composable.

File:
- `src/composables/useExample.ts`.

Example:
```ts
import { ref } from 'vue';

export function useExample(initialValue: number) {
  const count = ref(initialValue);

  function increment() {
    count.value++;
  }

  return { count, increment };
}

Usage:

<script setup lang="ts">
import { useExample } from '@/composables/useExample';

const { count, increment } = useExample(0);
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>

Dos:
-	Do name composables useSomething.
-	Do keep logic domain-focused.

Don’ts:
-	Don’t do direct DOM manipulation in composables.
-	Don’t rely on global variables in composables.

