---
description: Setting up NgRx for state management in an Angular project
globs: "**/*.ts, **/*.tsx, **/*.js, **/*.jsx"
---

You are a senior developer. You must always follow these rules when setting up NgRx for state management:

Installation:
- `npm install @ngrx/store @ngrx/effects`

Define Actions:
```ts
// counter.actions.ts
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

Define Reducer:

// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = { value: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, value: state.value + 1 })),
  on(decrement, (state) => ({ ...state, value: state.value - 1 })),
  on(reset, (state) => ({ ...state, value: 0 }))
);

Register in Module:

// app.module.ts
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  ...
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
})
export class AppModule {}

Usage in Component:

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="onIncrement()">+</button>
    <span>{{ value$ | async }}</span>
    <button (click)="onDecrement()">-</button>
  `
})
export class CounterComponent {
  value$: Observable<number>;

  constructor(private store: Store<{ counter: { value: number } }>) {
    this.value$ = store.select(state => state.counter.value);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
}

Dos:
-	Do keep your store, actions, reducers well organized.
-	Do use typed selectors for better type safety.

Don’ts:
-	Don’t mix UI logic with NgRx logic.
-	Don’t forget to unsubscribe if needed (AsyncPipe unsubscribes automatically).

