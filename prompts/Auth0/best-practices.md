---
description: Guidelines for implementing Auth0 in a Nuxt application
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Auth0 provides a powerful authentication and authorization platform that integrates seamlessly with Nuxt.js. This guide outlines best practices for implementing Auth0 securely and efficiently.

Do:
- Store Auth0 credentials (AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET) in environment variables.
- Use Auth0 SDK for Nuxt to simplify authentication integration.
- Implement Role-Based Access Control (RBAC) for fine-grained permissions.
- Use silent authentication to maintain user sessions without frequent re-login.
- Configure HTTP-only cookies for secure token storage.
- Restrict API calls based on JWT scopes and permissions.
- Monitor Auth0 logs to track authentication events and security incidents.

Don't:
- Expose client secrets in frontend code.
- Store tokens in local storage (use secure cookies instead).
- Grant excessive permissions to users beyond what they require.
- Ignore token expiration; ensure you refresh tokens correctly.
- Skip implementing redirect URIs in Auth0 dashboard correctly.

Security Considerations:
- Use HTTPS: Ensure your Nuxt app is served over HTTPS to protect sensitive data.
- Enable Multi-Factor Authentication (MFA) for higher security.
- Configure CORS properly to allow only trusted domains.
- Limit token lifetime: Set access token expiration policies to reduce risk.