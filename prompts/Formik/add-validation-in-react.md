---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Formik simplifies form validation in React applications by integrating with Yup for schema validation. This guide walks through adding validation to a form using Formik and Yup.

Install Dependencies:
- Ensure Formik and Yup are installed:
   ```sh
   npm install formik yup

Create a Form with Validation:
	•	Create a component SignupForm.tsx:

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />

          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;



Integrate the Form into Your Application:
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
	•	Start the development server and check that validation works correctly:

npm run dev

