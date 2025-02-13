add-component.mdc
---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
You are an advanced senior developer. You must always follow these rules.

File:
- UserCard.svelte

Example:
- 
  ```html
  <script>
    export let user = { name: '', avatarUrl: '' };
    export let onSelect = null;

    function handleClick() {
      if (onSelect) onSelect(user);
    }
  </script>

  <div on:click={handleClick}>
    <img src={user.avatarUrl} alt="User avatar" />
    <span>{user.name}</span>
  </div>

  <style>
    div {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 8px;
    }
  </style>

Usage:

<!-- App.svelte -->
<script>
  import UserCard from './UserCard.svelte';
  let currentUser = { name: 'Alice', avatarUrl: '/alice.png' };

  function selectUser(u) {
    console.log('Selected user:', u);
  }
</script>

<UserCard {currentUser} onSelect={selectUser} />

Dos:
	•	Do export props with export let propName.
	•	Do keep style scoped by default.

Don’ts:
	•	Don’t rely on external CSS unless truly global.
	•	Don’t manipulate parent data inside the child.

