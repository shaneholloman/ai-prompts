---
description: Generating a new Angular component
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when generating a new Angular component.

CLI:
- Use `ng generate component MyExample` to create it.

Example:
```ts
// my-example.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-example',
  templateUrl: './my-example.component.html',
  styleUrls: ['./my-example.component.css'],
  changeDetection: 0 // default or ChangeDetectionStrategy.OnPush
})
export class MyExampleComponent {
  @Input() title!: string;
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}

<!-- my-example.component.html -->
<div (click)="handleClick()">
  {{ title }}
</div>

Usage:

<!-- In parent template -->
<app-my-example [title]="someTitle" (clicked)="onClicked()"></app-my-example>

Testing:
-	Angular CLI generates a .spec.ts test file. Use TestBed to test.

Dos:
-	Do use Angular CLI to keep consistent structure.
-	Do define clear inputs/outputs.

Don’ts:
-	Don’t bind large arrays without trackBy.
-	Don’t forget to declare your component in an NgModule.

