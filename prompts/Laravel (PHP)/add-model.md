---
description: Creating a Laravel Eloquent Model
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a Laravel Eloquent Model.

Artisan Command:
- `php artisan make:model Product -m` (creates model + migration).

Model Example:
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'description'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

Migration:

// database/migrations/xxxx_create_products_table.php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->decimal('price', 8, 2);
    $table->text('description')->nullable();
    $table->timestamps();
});

Usage:

// in a Controller
$product = Product::create($request->all());

Dos:
-	Do define fillable fields or use guarded.
-	Do define relationships.

Don’ts:
-	Don’t forget to run php artisan migrate.
-	Don’t store business logic in the model if it’s extensive—use services.

