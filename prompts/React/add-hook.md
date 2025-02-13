---
description: Creating a custom React Hook
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules for creating a custom React Hook.

File Placement:
- Typically in `src/hooks/` or `src/utils/hooks/`.
- Name file `useSomething.ts`.

Example:
```ts
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string): {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancel = false;
    setIsLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        if (!cancel) setData(json);
      })
      .catch((err) => {
        if (!cancel) setError(err);
      })
      .finally(() => {
        if (!cancel) setIsLoading(false);
      });

    return () => {
      cancel = true;
    };
  }, [url]);

  return { data, isLoading, error };
}

Usage:

import React from 'react';
import { useFetch } from './useFetch';

export function DataDisplay() {
  const { data, isLoading, error } = useFetch<any>('https://api.example.com/items');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

Dos:
-	Do prefix with use.
-	Do handle cleanup for async operations.

Don’ts:
-	Don’t call hooks conditionally.
-	Don’t ignore potential re-renders; watch dependencies carefully.

