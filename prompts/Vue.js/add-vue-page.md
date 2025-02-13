---
description: Adding a new page in a Vue 3 application using Vue Router
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when adding a new page in a Vue application with Vue Router.

Router Setup:
- Typically in `src/router/index.ts` with a routes array.

Add Route:
```ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

Create Page Component:

<!-- src/pages/AboutPage.vue -->
<script setup lang="ts">
const msg = 'About Us';
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>This is the about page.</p>
</template>

App.vue:

<template>
  <router-view />
</template>

<script setup lang="ts">
// Basic root App
</script>

Usage:
-	<router-link to="/">Home</router-link>

Dos:
-	Do break out pages in separate .vue files.
-	Do name your routes for easy navigation with route names.

Don’ts:
-	Don’t create enormous single-file routes for everything.
-	Don’t push the same route repeatedly (handle logic checks).

