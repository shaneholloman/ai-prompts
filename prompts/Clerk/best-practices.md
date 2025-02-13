---
description: Guidelines for integrating Clerk securely and effectively
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Clerk is a user authentication and management service that provides authentication flows, user sessions, and multi-tenant organization support. This guide outlines best practices for integrating Clerk securely and effectively.

Do:
- Store `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in environment variables.
- Use Clerk's built-in authentication components instead of custom implementations.
- Configure middleware properly to protect routes based on user roles.
- Handle multi-environment setups (development, staging, production) by setting environment-specific keys.

Don't:
- Expose secret keys in client-side code.
- Manually handle authentication state if using Clerk’s SDK.
- Disable Clerk’s session handling mechanisms.