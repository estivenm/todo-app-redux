import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAllAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
}

toggleAll() {
  this.completado = !this.completado;
  const action = new ToggleTodoAllAction(this.completado);
  this.store.dispatch(action);
}
}
