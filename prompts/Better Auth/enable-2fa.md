---
description: Guidelines for enabling Two-Factor Authentication in Better Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Steps:
- Install the 2FA plugin
   ```sh
   npm install better-auth-2fa

	•	Enable 2FA in auth.ts

import { createAuth } from 'better-auth';
import { twoFactorAuth } from 'better-auth-2fa';

export const auth = createAuth({
  plugins: [twoFactorAuth()]
});


	•	Provide QR codes or OTP methods for user verification.

