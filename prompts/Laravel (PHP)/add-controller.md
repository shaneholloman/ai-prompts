---
description: Creating a Laravel Controller
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a Laravel Controller.

Artisan Command:
- `php artisan make:controller UserController`.

Example:
```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users'
        ]);
        $user = User::create($request->all());
        return redirect()->route('users.index')
                         ->with('success', 'User created successfully');
    }
}

Routing:
-	In routes/web.php:

Route::resource('users', UserController::class);

Blade View:
-	resources/views/users/index.blade.php.

Dos:
-	Do validate input.
-	Do use route model binding if possible.

Don’ts:
-	Don’t place all logic in the controller—use services for large tasks.
-	Don’t forget to sanitize or validate user input.

