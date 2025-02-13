---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Overview:
- Vuex provides a centralized state management system for Vue applications. This guide demonstrates how to create a Vuex module and use it in Vue components.

Create a Vuex Module:
- Create a new module inside `store/modules/todo.ts`:
  ```ts
  import { Module } from 'vuex';

  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  interface TodoState {
    todos: Todo[];
  }

  const todoModule: Module<TodoState, any> = {
    namespaced: true,
    state: () => ({
      todos: [],
    }),
    mutations: {
      addTodo(state, text: string) {
        state.todos.push({ id: Date.now(), text, completed: false });
      },
      toggleTodo(state, id: number) {
        const todo = state.todos.find(todo => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      removeTodo(state, id: number) {
        state.todos = state.todos.filter(todo => todo.id !== id);
      },
    },
  };

  export default todoModule;

Register the Vuex Module:
	•	Modify store/index.ts to include the new module:

import { createStore } from 'vuex';
import todoModule from './modules/todo';

export default createStore({
  modules: {
    todo: todoModule,
  },
});



Use Vuex in a Component:
	•	Create a component (TodoList.vue) that interacts with the store:

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const newTodo = ref('');
const todos = computed(() => store.state.todo.todos);
</script>

<template>
  <div>
    <input v-model="newTodo" placeholder="Enter a task" />
    <button @click="store.commit('todo/addTodo', newTodo); newTodo = ''">Add Todo</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span @click="store.commit('todo/toggleTodo', todo.id)">
          {{ todo.completed ? '✔' : '❌' }} {{ todo.text }}
        </span>
        <button @click="store.commit('todo/removeTodo', todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>



Register Vuex in Vue:
	•	Ensure Vuex is added to your Vue application (main.ts):

import { createApp } from 'vue';
import store from './store';
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');



Run and Test:
	•	Start the development server and test adding, toggling, and removing todos:

npm run dev

