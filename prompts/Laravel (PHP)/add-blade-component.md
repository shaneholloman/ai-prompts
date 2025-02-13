---
description: Creating a Blade Component in Laravel
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating a Blade Component in Laravel.

File:
- `php artisan make:component Alert`
- This creates `app/View/Components/Alert.php` and a Blade view at `resources/views/components/alert.blade.php`.

Example:
```php
// app/View/Components/Alert.php
namespace App\View\Components;

use Illuminate\View\Component;

class Alert extends Component
{
    public $type;

    public function __construct($type = 'info')
    {
        $this->type = $type;
    }

    public function render()
    {
        return view('components.alert');
    }
}

Blade File:

<!-- resources/views/components/alert.blade.php -->
<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>

Usage:

<x-alert type="danger">
    This is a danger alert!
</x-alert>

Dos:
-	Do pass dynamic data via constructor or attributes.
-	Do keep logic minimal in the component’s class.

Don’ts:
-	Don’t embed sensitive logic in the Blade template.
-	Don’t forget to sanitize user input if displayed.

