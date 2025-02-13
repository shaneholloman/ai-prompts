---
description: Guidelines for configuring Better Auth with PostgreSQL & Prisma
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Steps:
- Install dependencies
   ```sh
   npm install better-auth @prisma/client

	•	Modify Prisma schema

model User {
  id    String  @id @default(uuid())
  email String  @unique
  password String
}


	•	Run

npx prisma migrate dev --name init_auth


	•	Initialize Better Auth in auth.ts

import { createAuth } from 'better-auth';
export const auth = createAuth({ adapter: 'prisma' });

