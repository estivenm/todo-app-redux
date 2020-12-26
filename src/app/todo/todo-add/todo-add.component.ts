import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  constructor(public store: Store<AppState>) { }

  txtInput: FormControl;

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {

    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);

    if (this.txtInput.valid) {
      const action = new fromTodo.AgregarTodoAction( this.txtInput.value );
      this.store.dispatch(action);
      this.txtInput.setValue('');
    }
  }
}
