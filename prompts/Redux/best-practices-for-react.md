---
description: Guidelines for using Redux in React applications
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Redux is a powerful state management tool for React applications. This guide outlines best practices for using Redux efficiently and effectively.

Do:
- Use Redux Toolkit (`@reduxjs/toolkit`) to simplify Redux setup.
- Keep state normalized to avoid deeply nested structures.
- Use selectors for derived state and avoid unnecessary re-renders.
- Use middleware (e.g., `redux-thunk` or `redux-saga`) for handling side effects.
- Keep reducers pure (no side effects inside reducers).
- Structure Redux logic with feature-based slices (`createSlice()` in Redux Toolkit).
- Use TypeScript for type-safe actions and reducers.
- Use the React-Redux hooks (`useSelector`, `useDispatch`) instead of `connect()` for better readability.
- Use Redux DevTools for debugging and monitoring state changes.

Don't:
- Store non-serializable values (DOM elements, Promises, functions) in the Redux store.
- Mutate state directly inside reducers; always return a new state object.
- Use Redux for local component state (use `useState()` for that).
- Dispatch too many small actions that trigger excessive re-renders.
- Fetch data inside reducers; handle async logic in thunks or sagas.
- Rely on a single global store for everything; split state into meaningful slices.

Performance Considerations:
- Use memoization with `reselect` for expensive state computations.
- Batch updates to prevent unnecessary renders.
- Lazy load reducers in large apps to reduce initial bundle size.
- Unsubscribe listeners when they are no longer needed.