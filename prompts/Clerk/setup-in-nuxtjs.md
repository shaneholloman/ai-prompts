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

