---
description: Setting up Redux in a React project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when setting up Redux in a React project.

Installation:
- `npm install redux react-redux @reduxjs/toolkit`.

Setup Store:
```ts
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

Provide Store:

// main.tsx or App.tsx
import { Provider } from 'react-redux';
import { store } from './store';

export function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

Example Slice:

// features/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

Usage:

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { RootState } from './store';

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}

