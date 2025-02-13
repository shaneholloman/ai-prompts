---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

Installation:
- Install Vuex using npm or yarn:
   ```sh
   npm install vuex

yarn add vuex

Configuring Vuex in Vue:
	•	Register Vuex in store/index.ts:

import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    async incrementAsync({ commit }) {
      setTimeout(() => commit('increment'), 1000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});



Integrating Vuex in Vue:
	•	Use Vuex in main.ts:

import { createApp } from 'vue';
import store from './store';
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');



Using Vuex in Components:
	•	Use Vuex in a Vue component:

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="store.commit('increment')">+</button>
    <button @click="store.commit('decrement')">-</button>
  </div>
</template>



Persisting State:
	•	Enable Vuex persistence with a plugin:

import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
});



Testing Vuex Store:
	•	Run your Vue application and verify Vuex integration:

npm run dev

