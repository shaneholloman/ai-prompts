---
description: Guidelines for adding Google & GitHub OAuth to Better Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Steps:
- Install OAuth provider dependencies
   ```sh
   npm install better-auth-oauth

	•	Update auth.ts

import { createAuth, socialProviders } from 'better-auth';
export const auth = createAuth({
  socialProviders: {
    google: { clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET },
    github: { clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET }
  }
});


	•	Add sign-in buttons and handle OAuth callbacks.

