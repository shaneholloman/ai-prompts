---
description: Guidelines for enabling multi-tenant support with Clerk in Nuxt
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Clerk provides built-in multi-tenant authentication and organization management. This guide explains how to enable and integrate organization support in a Nuxt.js application.

Installing Clerk:
- Ensure that Clerk is installed in your Nuxt project
   ```sh
   npm install @clerk/clerk-js @clerk/nuxt

Enabling Organizations in Clerk Dashboard:
	•	Go to your Clerk Dashboard
	•	Navigate to Organizations
	•	Enable organization support and configure settings

Displaying Organization Management UI:
	•	Use Clerk’s built-in organization components

<template>
  <div>
    <h1>Manage Organization</h1>
    <ClerkOrganizationProfile />
  </div>
</template>



Switching Between Organizations:
	•	Allow users to switch between multiple organizations

<template>
  <div>
    <ClerkOrganizationSwitcher />
  </div>
</template>



Protecting Organization Routes:
	•	Ensure users are members of an organization before accessing certain routes

import { defineNuxtRouteMiddleware, navigateTo } from '#imports';
import { useAuth } from '@clerk/nuxt';

export default defineNuxtRouteMiddleware(() => {
  const { isSignedIn, organization } = useAuth();
  if (!isSignedIn || !organization) {
    return navigateTo('/select-organization');
  }
});



Fetching Organization Data:
	•	Retrieve organization details using Clerk’s API

<script setup>
import { useOrganization } from '@clerk/nuxt';

const { organization } = useOrganization();
</script>

<template>
  <div>
    <p v-if="organization">Current Organization: {{ organization.name }}</p>
  </div>
</template>



Testing:
	•	Run your Nuxt.js application and verify

npm run dev

	•	Users can create and switch organizations
	•	Organization-based route protection works
	•	Organization details are correctly displayed

