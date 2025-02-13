---
description: Guidelines for setting up Clerk in a Nuxt.js App
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Installation:
- Install Clerk for Nuxt
   ```sh
   npm install @clerk/clerk-js @clerk/nuxt

	•	Add Clerk to your Nuxt configuration (nuxt.config.ts)

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
  modules: ['@clerk/nuxt']
});



Initializing Clerk:
	•	Create a plugin (plugins/clerk.client.ts) to initialize Clerk

import { Clerk } from '@clerk/clerk-js';

export default defineNuxtPlugin((nuxtApp) => {
  const clerk = new Clerk(process.env.CLERK_PUBLISHABLE_KEY!);
  return {
    provide: {
      clerk,
    },
  };
});



Protecting Routes:
	•	Use Clerk middleware to protect routes (middleware/auth.ts)

import { defineNuxtRouteMiddleware, useRuntimeConfig, navigateTo } from '#imports';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig();
  const clerk = new Clerk(config.public.clerkPublishableKey);

  if (!await clerk.auth.isSignedIn()) {
    return navigateTo('/sign-in');
  }
});



Using Clerk Components:
	•	Use Clerk components in your Nuxt pages

<template>
  <div>
    <ClerkSignInButton />
    <ClerkUserButton />
  </div>
</template>



Testing:
	•	Run your Nuxt app and verify authentication

npm run dev

