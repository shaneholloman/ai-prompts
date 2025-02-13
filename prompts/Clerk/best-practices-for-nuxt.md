---
description: Guidelines for implementing Clerk in a Nuxt project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Clerk is a user authentication and management service that integrates with Nuxt.js to provide authentication flows, user sessions, and multi-tenant support. This guide outlines best practices for securely implementing Clerk in a Nuxt project.

Do:
- Store `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in environment variables.
- Use Clerk's built-in authentication components instead of custom implementations.
- Ensure middleware is configured correctly to protect routes based on user roles.
- Handle multi-environment setups by setting environment-specific keys.
- Utilize Clerk’s Nuxt module if available to streamline integration.

Don't:
- Expose secret keys in client-side code.
- Manually handle authentication state if using Clerk’s SDK.
- Disable Clerk’s session handling mechanisms.
- Ignore permission settings when using multi-tenant authentication.

Security Considerations:
- Environment Variables: Store all sensitive keys in `.env` files and never commit them to version control.
- Session Management: Leverage Clerk’s session handling instead of custom token management.
- Route Protection: Use Clerk’s middleware to prevent unauthorized access to protected pages.