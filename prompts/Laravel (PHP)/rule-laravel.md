---
description: Guidelines and best practices for Laravel (PHP 10.0 in 2025) projects
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when developing Laravel (PHP 10.0 in 2025) applications.

Project Structure:
- Organize controllers in `app/Http/Controllers`.
- Use Eloquent models in `app/Models`.

Routing:
- Define routes in `routes/web.php` for web and `routes/api.php` for APIs.
- Use resource controllers for CRUD endpoints.

Controllers & Models:
- Keep controllers thin; push business logic into services or models.
- Use model factories & migrations properly.

Database & Eloquent:
- Prefer Eloquent relationships for simpler code.
- Use migrations for schema changes.
- Use seeders for test data.

Security:
- Validate all inputs (Form Requests or manual validation).
- Protect against SQL injection, XSS, CSRF.
- Store secrets in `.env`, never commit `.env` to version control.

Blade Templates:
- Keep Blade templates simple.
- Use components for repeated UI blocks.

Testing:
- Use Pest or PHPUnit for tests.
- Test controllers, models, and services.
- Use `php artisan test` or `vendor/bin/pest`.

Dos:
- Do keep code DRY (Don’t Repeat Yourself).
- Do use official packages like Sanctum/Passport for authentication.

Don’ts:
- Don’t query the DB directly in Blade.
- Don’t store large logic in controllers. Use dedicated classes or form requests.