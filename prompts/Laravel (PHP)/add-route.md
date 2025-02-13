---
description: Adding a new Laravel route
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when adding a new Laravel route.

Web vs API:
- `routes/web.php` for web routes (session-based, typically Blade).
- `routes/api.php` for stateless JSON APIs.

Example:
```php
// routes/web.php
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Resource Route:

Route::resource('products', ProductController::class);
// GET /products -> index
// GET /products/create -> create
// POST /products -> store
// ...

API Route:

// routes/api.php
Route::get('/products', [ProductController::class, 'index']);

Security:

Route::middleware('auth')->group(function() {
  // protected routes
});

Dos:
-	Do name routes for easy referencing.
-	Do keep web.php organized, grouping routes by domain.

Don’ts:
-	Don’t define the same endpoint multiple times without reason.
-	Don’t skip authentication for sensitive endpoints.

