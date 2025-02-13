---
description: Creating a new page in a Next.js 15 project using the App Router
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Next.js 15 developer. You must always follow these rules when creating a new page in a Next.js 15 project using the App Router.

Directory Structure:
- Each route is a folder within `app/`. For example, `app/dashboard/page.tsx` -> `/dashboard`.
- For a dynamic route `[id]`, use `app/dashboard/[id]/page.tsx`.

Example:
```tsx
// app/dashboard/page.tsx (Server Component by default)
import React from 'react';

export const metadata = {
  title: 'Dashboard',
};

export default async function DashboardPage() {
  const data = await getSomeData(); // This runs on server
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

async function getSomeData() {
  // Possibly fetch from an API or DB
  return { userCount: 42 };
}

Client Interactivity:

// app/dashboard/page.tsx
"use client";
import { useState } from 'react';

export default function DashboardPage() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

-	Typically, use a Server Component by default and import a client component if needed.

Testing:
-	Render the page in your test environment (Jest or Cypress).
-	If you have server logic, consider integration tests or mocking.

Additional Files:
-	If you need a layout for the entire dashboard/ route, create app/dashboard/layout.tsx.

Dos:
-	Do co-locate route logic and page components under the same folder.
-	Do define metadata or Head for better SEO.

Don’ts:
-	Don’t mix server and client logic in the same component unless absolutely needed.
-	Don’t forget to handle revalidation if data changes frequently.

