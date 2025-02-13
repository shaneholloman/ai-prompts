---
description: Adding a reusable Vue 3 component
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when adding a reusable Vue 3 component.

File:
- `components/UserCard.vue` with `<script setup>`.

Example:
```vue
<script setup lang="ts">
interface User {
  name: string;
  avatarUrl: string;
}

const props = defineProps<{
  user: User;
  onSelect?: (user: User) => void;
}>();

function handleClick() {
  props.onSelect?.(props.user);
}
</script>

<template>
  <div @click="handleClick">
    <img :src="props.user.avatarUrl" :alt="props.user.name" />
    <p>{{ props.user.name }}</p>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
  display: flex;
  align-items: center;
}
img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 8px;
}
</style>

Usage:

<template>
  <UserCard :user="someUser" :onSelect="handleSelect" />
</template>

<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';

const someUser = { name: 'Alice', avatarUrl: '/images/alice.png' };

function handleSelect(user) {
  console.log('Selected:', user);
}
</script>

Dos:
-	Do keep the component’s logic minimal.
-	Do define prop types carefully.

Don’ts:
-	Don’t mutate user prop.
-	Don’t add global styles in the component <style>.

