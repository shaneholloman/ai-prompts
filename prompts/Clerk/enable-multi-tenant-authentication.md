---
description: Guidelines for enabling Multi-Tenant Authentication with Clerk
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Steps:
- Enable organizations in Clerk dashboard
- Integrate Clerk’s organization components
   ```tsx
   import { OrganizationProfile, OrganizationSwitcher } from '@clerk/nextjs';

   function Dashboard() {
     return (
       <div>
         <OrganizationSwitcher />
         <OrganizationProfile />
       </div>
     );
   }

	•	Assign users to organizations and implement access control based on organization.role.

