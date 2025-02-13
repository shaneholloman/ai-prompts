---
description: Guidelines for writing Next.js apps with Better Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Better Auth Best Practices:
- Overview
 - Better Auth is a framework-agnostic authentication and authorization library designed for TypeScript. This guide outlines best practices for using it securely and effectively.

- Do:
 - Store secrets in environment variables (`BETTER_AUTH_SECRET` in `.env`).
 - Use the CLI to generate and migrate authentication schema.
 - Ensure all authentication routes are properly handled in your backend.
 - Utilize built-in security features like 2FA and multi-tenant support.

- Don't:
 - Disable TypeScript strict mode; Better Auth relies on it for type safety.
 - Commit secret keys or database credentials to version control.
 - Use outdated cryptographic methods; Better Auth manages encryption internally.

Setting Up Better Auth in a Next.js App:
- Installation
 - Install dependencies
   ```sh
   npm install better-auth

	•	Create auth.ts

import { createAuth } from 'better-auth';
export const auth = createAuth({ secret: process.env.BETTER_AUTH_SECRET });


	•	Configure API route for authentication.
	•	Use auth.protect() middleware for route protection.

