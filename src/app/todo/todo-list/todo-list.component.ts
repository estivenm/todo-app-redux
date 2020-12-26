import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { TodoModel } from '../model/Todo.model';

import * as fromFiltro from '../../filter/filter.actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[] = [];
  filtro: fromFiltro.filtrosValidos;
  constructor(private store: State<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
    this.todos = state.todos;
    this.filtro = state.filtro;
  });
  }

}
