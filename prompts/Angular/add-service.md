---
description: Creating an Angular service
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when creating an Angular service.

CLI:
- `ng generate service myService`.

Example:
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>('https://api.example.com/items');
  }
}

Usage in Component:

import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-my-consumer',
  template: `
    <div *ngIf="items">
      <div *ngFor="let item of items">{{ item.name }}</div>
    </div>
  `,
})
export class MyConsumerComponent implements OnInit {
  items: any[] = [];

  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.myService.getItems().subscribe((data) => (this.items = data));
  }
}

Best Practices:
-	Keep logic in services, not in components.
-	Use RxJS operators, handle errors, etc.

Dos:
-	Do inject HttpClient in constructor for REST calls.
-	Do handle errors with catchError if needed.

Don’ts:
-	Don’t do direct DOM manipulation in services.
-	Don’t store ephemeral component state in services (avoid memory leaks).

