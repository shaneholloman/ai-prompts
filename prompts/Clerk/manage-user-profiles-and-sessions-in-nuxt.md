---
description: Guidelines for managing Clerk user profiles & sessions in Nuxt
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Clerk provides built-in components and API methods for managing user authentication, profiles, and sessions in a Nuxt.js application. This guide walks through integrating user profile management.

Installing Clerk Components:
- Ensure you have installed the required dependencies
   ```sh
   npm install @clerk/clerk-js @clerk/nuxt

Displaying User Profile Information:
	•	Use Clerk’s UserProfile component to allow users to manage their profile details

<template>
  <div>
    <h1>User Profile</h1>
    <ClerkUserProfile />
  </div>
</template>



Handling User Sessions:
	•	Retrieve user session data using Clerk’s useUser composable

<script setup>
import { useUser } from '@clerk/nuxt';

const { user, isSignedIn } = useUser();
</script>

<template>
  <div>
    <p v-if="isSignedIn">Welcome, {{ user?.firstName }}!</p>
    <p v-else>Please sign in.</p>
  </div>
</template>



Protecting User Profile Page:
	•	Use route middleware to protect user profile pages

import { defineNuxtRouteMiddleware, navigateTo } from '#imports';
import { useAuth } from '@clerk/nuxt';

export default defineNuxtRouteMiddleware(() => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return navigateTo('/sign-in');
  }
});



Signing Out Users:
	•	Provide a logout button

<template>
  <button @click="$clerk.signOut()">Sign Out</button>
</template>



Testing:
	•	Run your Nuxt.js application and verify users can

npm run dev

	•	View and edit their profiles
	•	See session status
	•	Log in and out seamlessly

