format the prompt below with the following.


1. remove all bold ** markdown asterisk. not needed
2. remove the "#" h1 heading
Example:
```
# rule-nuxtjs.mdc <-- remove this header
```

3. add also the frontmatter header in this style:

Example:
```
---
description: Guidelines for writing Next.js apps with Supabase Auth
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---
```

4. instead of writing adhere you change the role sentence (mostly first part) to "you are an .... senior developer. You must always follow these rules."
5. remove the numbers use this style of formatting

Example:
```
Project Structure:
- rule 1
 - rule 1.1
- rule 2
```
5. only output the rule, filename.mdc and format it to markdown code output
6. open it in canvas


PROMPT:

"""

# add-component.mdc

You are creating a **Svelte component**:

1) File
   - `UserCard.svelte`.

2) Example
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
   ```

3) Usage
   ```html
   <!-- App.svelte -->
   <script>
     import UserCard from './UserCard.svelte';
     let currentUser = { name: 'Alice', avatarUrl: '/alice.png' };

     function selectUser(u) {
       console.log('Selected user:', u);
     }
   </script>

   <UserCard {currentUser} onSelect={selectUser} />
   ```

**Dos**
- Do export props with `export let propName`.  
- Do keep style scoped by default.

**Don’ts**
- Don’t rely on external CSS unless truly global.  
- Don’t manipulate parent data inside the child.

---