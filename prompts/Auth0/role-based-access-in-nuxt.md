---
description: Guidelines for implementing RBAC with Auth0 in Nuxt
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Role-Based Access Control (RBAC) allows you to restrict access to specific parts of your Nuxt application based on user roles assigned in Auth0.

Configuring Roles in Auth0:
- Log in to your Auth0 Dashboard
- Navigate to User Management > Roles
- Create roles (e.g., `admin`, `editor`, `user`)
- Assign users to roles
- Update the Auth0 access token to include roles by creating a Rule
   ```js
   function addRolesToToken(user, context, callback) {
     const namespace = 'https://your-app.com/roles';
     context.accessToken[namespace] = user.app_metadata.roles || [];
     return callback(null, user, context);
   }

Retrieving User Roles in Nuxt:
	•	Update composables/useAuth.ts to include roles

import { useState } from '#app';

export const useAuth = () => {
  const auth0 = useNuxtApp().$auth0;
  const user = useState('user', () => null);
  const roles = useState('roles', () => []);

  const getUser = async () => {
    user.value = await auth0.getUser();
    const token = await auth0.getIdTokenClaims();
    roles.value = token?.['https://your-app.com/roles'] || [];
  };

  return { user, roles, getUser };
};



Protecting Routes Based on Roles:
	•	Use Nuxt middleware to restrict access

import { defineNuxtRouteMiddleware, navigateTo } from '#imports';
import { useAuth } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware(async () => {
  const { getUser, roles } = useAuth();
  await getUser();

  if (!roles.value.includes('admin')) {
    return navigateTo('/unauthorized');
  }
});



Checking User Roles in Components:
	•	Use computed properties in Vue templates to display content conditionally

<script setup>
import { useAuth } from '~/composables/useAuth';
const { roles } = useAuth();
</script>

<template>
  <div>
    <p v-if="roles.includes('admin')">Admin Dashboard</p>
    <p v-else>You do not have access to this section.</p>
  </div>
</template>



Testing:
	•	Run your Nuxt app and verify

npm run dev

	•	Users with the admin role can access admin-only pages
	•	Non-admin users are redirected to /unauthorized
	•	Role-based UI elements display correctly

