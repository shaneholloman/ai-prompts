---
description: Guidelines for Vue.js 3 development
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Vue.js 3 developer. You must always follow these rules:

Single File Components:
- Use `<script setup>` or Composition API.
- Name files in PascalCase, e.g. `UserCard.vue`.

Props & Emits:
- Use `defineProps` and `defineEmits` in `<script setup>`.
- Don’t mutate props directly.

State Management:
- Use Pinia or provide/inject.
- Avoid large or confusing usage of global data.

Reactive Utilities:
- Use `ref` and `reactive`.
- Use `computed` for derived state.

Lifecycle:
- Use `onMounted`, `onUnmounted`, etc. in `<script setup>` or from Vue’s composition API.

Performance:
- Key your `v-for` loops with unique IDs.
- Use `watch` or watchers carefully to avoid performance hits.

Testing:
- Use Vue Test Utils for unit tests.
- Keep components small and testable.

Dos:
- Do keep logic in composables for reuse.
- Do keep styles scoped if possible.

Don’ts:
- Don’t pollute global config with repetitive logic.
- Don’t mix Options and Composition API in the same component unless migrating code.