---
description: Guidelines for installing and setting up Next.js 15 with ShadCN and Lucide React
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

# Next.js 15 + ShadCN + Lucide React Installation Guide

You are a frontend expert setting up a Next.js 15 project with ShadCN UI and Lucide React for a consistent, optimized, and maintainable component system.

## 🚀 Installation Steps

- Uses App Router (`app/` directory).
- Comes with ESLint and TailwindCSS pre-configured.

ATTENTION: Nextjs is already installed and has a pre setup since if
you install nextjs with ai then it will create a new directory within the current
directory and this leads to an error!

2. Set up ShadCN UI
```bash
npx shadcn@latest init
```
- Select TypeScript and TailwindCSS when prompted.
- ShadCN will create the `components/ui/` folder for UI components.

3. Install Lucide React (Icons)
```bash
npm install lucide-react
```
- Use Lucide icons consistently in UI components.

4. Add ShadCN Components
```bash
npx shadcn@latest add button input dialog
```
- Only install necessary components to keep the bundle size small.
- The CLI will add them to `components/ui/`.

---

## ⚙️ Configuration & Setup

### 1. Global Theme & Styling

ShadCN relies on Tailwind, so configure your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

### 2. Using ShadCN Components with Lucide Icons

Example: Button with an icon.

```tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ExampleButton() {
  return (
    <Button variant="outline">
      Click me
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
```

### 3. Customizing Components

You can extend ShadCN components instead of modifying them directly.

Example: Creating a custom button variant.

```tsx
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

export function CustomButton({ className, ...props }: ButtonProps) {
  return <Button className={cn("bg-primary text-white", className)} {...props} />;
}
```

---

## ⚡ Performance & Best Practices

### ✅ Do This
✔ Use `npx shadcn add <component>` instead of manually copying components.  
✔ Keep UI logic inside `components/ui/` and business logic separate.  
✔ Lazy load large or infrequently used UI components with `dynamic()`.  

### ❌ Avoid This
✖ Importing all ShadCN components at once.  
✖ Overriding ShadCN styles inside individual components (use Tailwind config instead).  
✖ Using non-standard icons or mixing multiple icon libraries.  

---

## 🔥 Final Project Structure

```
app/
│── layout.tsx
│── page.tsx
│── dashboard/
│   ├── page.tsx
components/
│── ui/
│   ├── button.tsx
│   ├── input.tsx
│── CustomButton.tsx
lib/
│── utils.ts
styles/
│── globals.css
│── tailwind.config.ts
```

---

## ✅ Final Notes

- Always keep ShadCN and Lucide up to date with `npx shadcn@latest upgrade`.
- Only install necessary UI components to reduce build size.
- Ensure accessibility by keeping ARIA attributes in ShadCN components.

This guide ensures a clean, scalable, and high-performance Next.js 15 project with ShadCN UI & Lucide React.
