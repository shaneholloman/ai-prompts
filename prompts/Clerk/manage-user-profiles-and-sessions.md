---
description: Guidelines for managing Clerk user profiles & sessions
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Steps:
- Add a user profile management component
   ```tsx
   import { UserProfile } from '@clerk/nextjs';

   export default function ProfilePage() {
     return <UserProfile />;
   }

	•	Access session information

import { useUser } from '@clerk/nextjs';

export default function Dashboard() {
  const { user } = useUser();
  return <p>Welcome, {user?.firstName}!</p>;
}

