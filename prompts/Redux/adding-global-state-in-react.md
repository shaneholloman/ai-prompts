---
description: Guidelines for adding global state with Redux in React
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- This guide explains how to add a new global state slice using Redux Toolkit in a React application.

Steps:
- Install Dependencies
   ```sh
   npm install @reduxjs/toolkit react-redux

	•	Create a New Redux Slice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;


	•	Add the Slice to the Redux Store

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


	•	Use the Global State in a Component

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './features/todoSlice';
import type { RootState, AppDispatch } from './store';
import { useState } from 'react';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(newTodo));
          setNewTodo('');
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? '✔' : '❌'} {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


	•	Integrate the Component in Your App

import { Provider } from 'react-redux';
import { store } from './store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;


	•	Run and Test

npm run dev

