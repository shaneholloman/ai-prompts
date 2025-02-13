---
description: "Guidelines for creating a new page in Nuxt 3"
globs: "**/*.vue"
---

You are a senior Nuxt 3 developer. You must always follow these rules.

Project Structure:
- File-Based Routing
  - Create a `.vue` file under `pages/`. For example, `pages/profile.vue` for `/profile` route.
  - For dynamic routes, use `[param].vue` (like `[id].vue`).

Page Structure:
- Use `<script setup>` for page logic.
- Export a default `<template>` in the same file.

Fetch Data:
- If you need async data, use `useAsyncData` or `onMounted`. Example:
  ```ts
  const { data, error } = await useAsyncData('profileData', () =>
    $fetch('/api/profile')
  );
  ```
- Handle errors gracefully (e.g. `error.value`).

Example:
```vue
<!-- pages/profile.vue -->
<template>
  <h1>User Profile</h1>
  <div v-if="error">
    {{ error.message }}
  </div>
  <div v-else-if="data">
    Hello, {{ data.name }}!
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup lang="ts">
const { data, error } = await useAsyncData('profile', () =>
  $fetch('/api/profile')
);
</script>

<style scoped>
/* page-specific styles */
</style>
```

Navigation:
- Use `<NuxtLink to="/profile">Go to Profile</NuxtLink>` for internal navigation.
- If you need programmatic navigation, use `useRouter()`.

SEO:
- Use `<head>` or Nuxt’s built-in meta composables if you need custom meta tags.

Dos:
- Do keep page logic minimal—delegate complex logic to composables.
- Do handle loading and error states in SSR gracefully.

Donts:
- Don’t rely on direct route manipulation; use Nuxt’s router.
- Don’t block SSR with large synchronous tasks.