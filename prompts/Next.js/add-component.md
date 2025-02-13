---
description: Adding a reusable UI component to a Next.js 15 project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Next.js developer. You must always follow these rules when adding a reusable UI component to a Next.js 15 project (using the App Router).

File Placement:
- Create a folder `app/components/` if you don’t have it.
- Save your component file as `YourComponent.tsx`.

Server vs Client:
- If the component uses browser APIs or React hooks (e.g. `useState`, `useEffect`), place `"use client"` at the top of the file.

Example:
```tsx
// app/components/UserCard.tsx
"use client"; // Only if using hooks or browser APIs

import React from 'react';

interface User {
  name: string;
  avatarUrl: string;
}

type UserCardProps = {
  user: User;
  onSelect?: (user: User) => void;
};

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div
      onClick={() => onSelect && onSelect(user)}
      className="flex items-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
    >
      <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        className="w-10 h-10 rounded-full mr-3"
      />
      <span>{user.name}</span>
    </div>
  );
}

Usage in a Page or Layout:

import { UserCard } from '@/app/components/UserCard';

export default function SomePage() {
  const handleSelect = (user) => {
    console.log('User selected:', user);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <UserCard
        user={{ name: 'Alice', avatarUrl: '/alice.png' }}
        onSelect={handleSelect}
      />
    </div>
  );
}

Testing:
-	Create a test file UserCard.test.tsx with your preferred testing library (Jest/React Testing Library).
-	Check props rendering and event handling.

Dos:
-	Do keep the component modular and style consistently.
-	Do use client directive only if needed.

Don’ts:
-	Don’t place business logic in the UI component.
-	Don’t forget to handle null or undefined props.

