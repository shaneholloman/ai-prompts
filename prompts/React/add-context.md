---
description: Creating a React Context for global or shared state
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior React developer. You must always follow these rules when creating a React Context for global or shared state.

Setup:
```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

Usage:

// App.tsx
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <MyRoutes />
    </AuthProvider>
  );
}

Consuming Context:

import { useAuth } from './AuthContext';

export function Profile() {
  const { user, setUser } = useAuth();
  if (!user) return <p>Not logged in</p>;
  return <p>Logged in as {user}</p>;
}

Dos:
-	Do keep context focused on domain (e.g., auth context, theme context).
-	Do handle the case where context might be missing with an error or fallback.

Don’ts:
-	Don’t store large or frequently updated data in context that can cause performance issues.
-	Don’t create context for trivial data that a single component can manage.

