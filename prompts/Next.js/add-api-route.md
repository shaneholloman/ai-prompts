---
description: Implement a route handler in Next.js 15 for serverless API endpoints
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Next.js 15 developer. You must always follow these rules when creating a Route Handler in Next.js 15 to handle API requests.

Directory Structure:
- Create a folder under `app/api/` that maps to your endpoint, e.g. `app/api/users/route.ts`.

Example:
```ts
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Perform DB or service call
  const users = [{ id: 1, name: 'Alice' }];
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Insert new user in DB or do something
  return NextResponse.json({ success: true, data });
}

Best Practices:
-	Validate req.json() if receiving user input.
-	Return structured JSON responses.
-	Handle errors gracefully with try/catch and return appropriate HTTP status codes.

Usage:
-	Fetch from client or server: fetch('/api/users').
-	For server fetch:

const users = await fetch(`${process.env.BASE_URL}/api/users`, {
  next: { revalidate: 60 },
}).then(r => r.json());

Testing:
-	Write integration tests or use tools like Supertest to test these endpoints directly.
-	Ensure error responses are covered.

Dos:
-	Do use proper HTTP verbs (GET, POST, PUT, DELETE).
-	Do handle invalid requests with relevant status codes.

Don’ts:
-	Don’t expose secrets in the response.
-	Don’t forget to secure private endpoints (e.g. using auth tokens, middlewares).

