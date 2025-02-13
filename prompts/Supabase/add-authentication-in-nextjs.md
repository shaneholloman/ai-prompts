---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Supabase provides authentication via email/password, OAuth, and magic links. This guide covers setting up authentication in a Next.js app.

Install Dependencies:
- Ensure Supabase is installed:
  ```sh
  npm install @supabase/supabase-js

Configure Supabase Client:
	•	Create a utility file lib/supabase.ts:

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default supabase;



Implement Authentication:
	•	Create a component (components/Auth.tsx) to handle authentication:

import { useState } from 'react';
import supabase from '@/lib/supabase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const signIn = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (user) setUser(user);
    if (error) alert(error.message);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signIn}>Sign In</button>
        </div>
      ) : (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Auth;



Protect Pages with Middleware:
	•	Create middleware in middleware.ts to protect authenticated routes:

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import supabase from './lib/supabase';

export async function middleware(req: NextRequest) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}



Run and Test:
	•	Start the development server and verify authentication:

npm run dev

