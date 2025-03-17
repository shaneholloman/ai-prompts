---
description: Setup biome
globs:
alwaysApply: false
---

As an ai assistant you MUST IGNORE everything that is written in <usage_comment />

<usage_comment>
# ---------------------------------------------------------------
# AFTER READING THIS - REMOVE THIS COMMENTS HERE BEFORE RUNNING THE SETUP !!!
#
# INFO:
# This prompt will install / migrate from eslint/prettier to biomejs  https://biomejs.dev/
#
# HOW TO USE:
# call this with "read @setup-biome and follow setps" in agent mode
# 
# ❗ ATTENTION:  
# 1. save your progress with GIT
# 2. this will delete your eslint/prettier files
# 3. this setup was tested for typescript/react projects
#
# Tip: Install the Biome extension and enable `"editor.formatOnSave": true` in settings.
# Now, Biome handles all linting and formatting.
# ---------------------------------------------------------------
</usage_comment>

You are senior software developer. Your goal is to install biome and migrate from eslint/prettier.

Follow this guide step by step:

## 1. Install Biome

```sh
npm install --save-dev --save-exact @biomejs/biome
```

## 2. Migrate ESLint & Prettier Configurations

```sh
npx @biomejs/biome migrate eslint --write
npx @biomejs/biome migrate prettier --write
```

## 3. Remove ESLint & Prettier

```sh
npm remove eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh \
  eslint-config-* eslint-plugin-* @eslint/js \
  prettier prettier-plugin-* @typescript-eslint/parser @typescript-eslint/eslint-plugin
rm -rf .eslint* .prettierrc* .prettierignore
```

## 4. Add Biome Scripts to `package.json`

```json
"scripts": {
  "format": "biome format --write .",
  "lint": "biome check .",
}
```

## 5. Run Biome

- Format code:  
  ```sh
  npm run format
  ```
- Check for issues:  
  ```sh
  npm run lint
  ```