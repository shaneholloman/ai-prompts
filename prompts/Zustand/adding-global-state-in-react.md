---
description: Guidelines for adding global state with Zustand in React
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Zustand is a lightweight state management library for React. This guide covers adding a new global state store using Zustand.

Steps:
- Install Zustand
   ```sh
   npm install zustand

	•	Create a Global Store

import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [
      ...state.todos,
      { id: Date.now(), text, completed: false }
    ],
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}));

export default useTodoStore;


	•	Use Zustand Store in Components

import { useState } from 'react';
import useTodoStore from './store/todoStore';

const TodoList = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(newTodo);
          setNewTodo('');
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? '✔' : '❌'} {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


	•	Integrate with the App

import TodoList from './TodoList';

function App() {
  return (
    <div>
      <h1>Todo App with Zustand</h1>
      <TodoList />
    </div>
  );
}

export default App;


	•	Run and Test

npm run dev