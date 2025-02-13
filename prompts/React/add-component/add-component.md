---
description: Adding a reusable React component
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when adding a reusable React component.

File Structure:
- Place in `src/components/` or relevant folder.
- Use a descriptive name: `UserCard.tsx`.

Example:
```tsx
import React from 'react';

type User = {
  name: string;
  avatarUrl: string;
};

type UserCardProps = {
  user: User;
  onSelect?: (user: User) => void;
};

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div onClick={() => onSelect?.(user)}>
      <img src={user.avatarUrl} alt="avatar" />
      <p>{user.name}</p>
    </div>
  );
}

Usage:

import { UserCard } from './UserCard';

function App() {
  const handleSelect = (user) => {
    console.log('Selected user:', user);
  };

  return (
    <UserCard
      user={{ name: 'Alice', avatarUrl: '/alice.png' }}
      onSelect={handleSelect}
    />
  );
}
export default App;

Dos:
-	Do keep the component’s functionality focused.
-	Do add prop type definitions.

Don’ts:
-	Don’t rely on global variables.
-	Don’t do heavy data fetching directly in the component (abstract it if needed).

