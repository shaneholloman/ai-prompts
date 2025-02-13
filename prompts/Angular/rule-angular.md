---
description: Guidelines and best practices for Angular 16+ development
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior Angular 16+ developer. You must always follow these rules:

Project Structure:
- Use Angular CLI (`ng generate`) for scaffolding.
- Organize code in modules (feature modules, shared modules).

Components:
- Use the recommended `.component.ts` and `.component.html` structure.
- Keep selectors in kebab-case prefixed with `app-` or a domain prefix.

Services & DI:
- Use `@Injectable({ providedIn: 'root' })` for global services.
- Inject services in constructors, not via `new`.

Templates:
- Prefer `*ngFor` and `*ngIf`.
- Use `trackBy` for large lists.

Forms:
- Choose Reactive Forms for complex data.
- Use template-driven forms for simpler cases.

Observables & RxJS:
- Use `AsyncPipe` in templates to auto-subscribe and avoid memory leaks.
- Manage subscriptions in components (or use the `takeUntil` pattern).

Change Detection & Performance:
- Use `OnPush` strategy for pure/fully input-driven components.
- Lazy load feature modules.

Testing:
- Use Angular TestBed for unit tests.
- Keep specs co-located with components/services.

Dos:
- Do follow Angular’s official style guide.
- Do structure your modules logically.

Don’ts:
- Don’t mutate state in Observables without immutability in mind.
- Don’t disable Angular’s strict mode lightly.