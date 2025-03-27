---
description: 
globs: 
alwaysApply: false
---

# ShadCN UI Installation Guide

As an AI assistant, ignore all content within `<readme_ignore />`

<readme_ignore>
<!--
  This guide will help you install/upgrade ShadCN UI for Vite, Next.js, and Astro projects.
  # ❗ ATTENTION:  I highly recommend to create a new git branch before running this script
-->
</readme_ignore>

You are a ShadCN UI installation expert.


IMPORTANT RULE: ITS FORBIDDEN TO USE DEPRECATED `shadcn-ui` or `npx @shadcn-ui@latest` command

Follow this guide step-by-step:

---

## Step 1: Identify Your Environment

Check whether you're using Vite, Next.js, or Astro by inspecting your project's files (e.g., `vite.config.ts`, `next.config.js`, `astro.config.mjs`) or reviewing your `package.json` dependencies.

---

## Step 2: ShadCN UI Installation Paths

Follow the appropriate installation path below based on your framework:

<shadcn_install_path>

  <path name="vite">

  1. Check if Vite is installed

     ```bash
     grep vite package.json
     ```

     - If you don’t see a reference to Vite, install it:

       ```bash
       pnpm create vite@latest
       ```

  2. Add Tailwind CSS

     ```bash
     pnpm add tailwindcss @tailwindcss/vite
     ```

     Replace all contents of `src/index.css` (or create it if it doesn’t exist) with:
     ```css
     @import "tailwindcss";
     ```

  3. Edit `tsconfig.json`

     Make sure you have the following properties in your `tsconfig.json`:
     ```json
     {
       "files": [],
       "references": [
         {
           "path": "./tsconfig.app.json"
         },
         {
           "path": "./tsconfig.node.json"
         }
       ],
       "compilerOptions": {
         "baseUrl": ".",
         "paths": {
           "@/*": ["./src/*"]
         }
       }
     }
     ```

  4. Edit `tsconfig.app.json`

     In your `tsconfig.app.json`, add:
     ```json
     {
       "compilerOptions": {
         // ...
         "baseUrl": ".",
         "paths": {
           "@/*": [
             "./src/*"
           ]
         }
         // ...
       }
     }
     ```

  5. Install `@types/node` (If Not Installed)

     ```bash
     pnpm add -D @types/node
     ```

  6. Update `vite.config.ts`

     ```ts
     import path from "path"
     import tailwindcss from "@tailwindcss/vite"
     import react from "@vitejs/plugin-react"
     import { defineConfig } from "vite"
     
     // https://vite.dev/config/
     export default defineConfig({
       plugins: [react(), tailwindcss()],
       resolve: {
         alias: {
           "@": path.resolve(__dirname, "./src"),
         },
       },
     })
     ```

  7. Run ShadCN Init

     Use the force installation command:

     ```bash
     pnpm dlx shadcn@latest init --yes --defaults --force --css-variables
     ```

     This sets up the ShadCN UI configuration in your project.

  8. Add Components

     ```bash
     pnpm dlx shadcn@latest add button
     ```

     Import and use the component in your app (e.g., `src/App.tsx`):
     ```tsx
     import { Button } from "@/components/ui/button"
     
     function App() {
       return (
         <div className="flex flex-col items-center justify-center min-h-screen">
           <Button>Click me</Button>
         </div>
       )
     }

     export default App
     ```

  </path>

  <path name="next">

  1. Check if Next.js is installed

     ```bash
     grep next package.json
     ```

     - If you don't see Next.js listed, install or create a Next.js project:

       ```bash
       pnpm create next-app
       ```

  2. Run ShadCN Init

     ```bash
     pnpm dlx shadcn@latest init --yes --defaults --force --css-variables
     ```

     Choose Next.js when prompted (or confirm if it auto-detects Next.js). This sets up the ShadCN UI configuration in your Next.js project.

  3. Add Components

     ```bash
     pnpm dlx shadcn@latest add button
     ```

     You can now import and use the component in your app (e.g., `pages/index.tsx`):
     ```tsx
     import { Button } from "@/components/ui/button"

     export default function Home() {
       return (
         <div>
           <Button>Click me</Button>
         </div>
       )
     }
     ```

  </path>

  <path name="astro">

  1. Check if Astro is installed

     ```bash
     grep astro package.json
     ```

     - If you don't see Astro, create a new Astro project with Tailwind CSS and React support:

       ```bash
       pnpm create astro@latest astro-app --template with-tailwindcss --install --add react --git
       ```

  2. Edit `tsconfig.json`

     Make sure you have the following properties in your `tsconfig.json`:
     ```json
     {
       "compilerOptions": {
         // ...
         "baseUrl": ".",
         "paths": {
           "@/*": ["./src/*"]
         }
         // ...
       }
     }
     ```

  3. Run ShadCN Init

     ```bash
     pnpm dlx shadcn@latest init --yes --defaults --force --css-variables
     ```

     This sets up the ShadCN UI configuration in your Astro project.

  4. Add Components

     ```bash
     pnpm dlx shadcn@latest add button
     ```

     Then import and use the component in your Astro pages (e.g., `src/pages/index.astro`):
     ```astro
     ---
     import { Button } from "@/components/ui/button"
     ---
     <html lang="en">
       <head>
         <meta charset="utf-8" />
         <meta name="viewport" content="width=device-width" />
         <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
         <title>Astro + TailwindCSS</title>
       </head>
       <body>
         <div class="grid place-items-center h-screen content-center">
           <Button>Button</Button>
         </div>
       </body>
     </html>
     ```

  </path>

</shadcn_install_path>