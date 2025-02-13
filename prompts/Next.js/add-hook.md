---
description: Creating a React Hook in a Next.js 15 project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a React Hook in a Next.js 15 project (client-only logic).

Location:
- Place custom hooks in a `hooks/` or `app/hooks/` folder.
- Name the file with `use` prefix, e.g., `useFetch.ts`.

Implementation:
```ts
// app/hooks/useFetch.ts
"use client";
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancel = false;
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((json) => {
        if (!cancel) {
          setData(json);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancel) setError(err);
      })
      .finally(() => {
        if (!cancel) setLoading(false);
      });

    return () => {
      cancel = true;
    };
  }, [url]);

  return { data, error, loading };
}

Usage:

import { useFetch } from '@/app/hooks/useFetch';

export default function MyComponent() {
  const { data, error, loading } = useFetch<any>('/api/something');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
}

Best Practices:
-	Avoid hooking into server components with this; only use hooks in client components.
-	Use caching or SWR if you want advanced data fetching.

Testing:
-	Use React Testing Library or Jest with mocking fetch.
-	Verify loading states, success, and error flow.

Dos:
-	Do prefix the function name with use.
-	Do handle potential unmount with a cleanup function.

Don’ts:
-	Don’t assume the hook runs server-side. It’s strictly client-only if it uses useEffect.
-	Don’t fetch secrets or store credentials in the hook.

