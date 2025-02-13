---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Zod provides a powerful and TypeScript-friendly schema validation system for React applications. This guide covers integrating Zod validation in React forms using React Hook Form.

Install Dependencies:
- Ensure Zod and the resolver package are installed:
   ```sh
   npm install zod @hookform/resolvers

Create a Zod Validation Schema:
	•	Define validation rules in validationSchema.ts:

import { z } from 'zod';

export const validationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});



Implement Validation in a Form:
	•	Create a form component (SignupForm.tsx):

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './validationSchema';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label>Name</label>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Email</label>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password</label>
      <input type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;



Integrate the Form in Your Application:
	•	Use the SignupForm component inside App.tsx:

import SignupForm from './SignupForm';

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm />
    </div>
  );
}

export default App;



Run and Test:
	•	Start the development server and verify that validation works correctly:

npm run dev

