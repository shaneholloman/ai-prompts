---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- FormKit provides a powerful validation system for handling form inputs in Vue.js applications. This guide covers adding validation to forms using FormKit.

Install FormKit:
- Ensure FormKit is installed:
   ```sh
   npm install @formkit/vue

Create a Form with Validation:
	•	Create a component SignupForm.vue:

<template>
  <FormKit type="form" @submit="handleSubmit">
    <FormKit type="text" name="name" label="Name" validation="required" />
    <FormKit type="email" name="email" label="Email" validation="required|email" />
    <FormKit type="password" name="password" label="Password" validation="required|min:6" />
    <FormKit type="submit" label="Sign Up" />
  </FormKit>
</template>

<script setup>
const handleSubmit = (values) => {
  console.log('Form Submitted:', values);
};
</script>



Integrate the Form into Your Application:
	•	Use the SignupForm component inside App.vue:

<template>
  <div>
    <h1>Sign Up</h1>
    <SignupForm />
  </div>
</template>

<script setup>
import SignupForm from './SignupForm.vue';
</script>



Customize Validation Messages:
	•	Define custom validation messages in formkit.config.ts:

import { defaultConfig } from '@formkit/vue';

export default defaultConfig({
  messages: {
    en: {
      validation: {
        required: 'This field is required',
        email: 'Please enter a valid email',
        min: 'Must be at least {args[0]} characters long',
      },
    },
  },
});



Run and Test:
	•	Start the development server and check that validation works correctly:

npm run dev

