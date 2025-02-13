---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Pinia provides a simple and powerful way to manage global state in Vue.js applications. This guide demonstrates how to create a Pinia store and use it in Vue components.

Install Pinia:
- Ensure Pinia is installed in your Vue project
   ```sh
   npm install pinia

Create a Global Store:
	•	Create a new store inside stores/todoStore.ts

import { defineStore } from 'pinia';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoState => ({ todos: [] }),
  actions: {
    addTodo(text: string) {
      this.todos.push({ id: Date.now(), text, completed: false });
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});



Use Pinia Store in Components:
	•	Create a component (TodoList.vue) that interacts with the store

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();
const newTodo = ref('');
</script>

<template>
  <div>
    <input v-model="newTodo" placeholder="Enter a task" />
    <button @click="todoStore.addTodo(newTodo); newTodo = ''">Add Todo</button>
    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id">
        <span @click="todoStore.toggleTodo(todo.id)">
          {{ todo.completed ? '✔' : '❌' }} {{ todo.text }}
        </span>
        <button @click="todoStore.removeTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>



Register Pinia in Vue App:
	•	Ensure Pinia is added to your Vue application (main.ts)

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');



Run and Test:
	•	Start the development server and test adding, toggling, and removing todos

npm run dev

