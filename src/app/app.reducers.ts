import { TodoModel } from './todo/model/Todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducers';
import * as fromFiltro from './filter/filter.reducer';
import * as fromfiltroValidos from './filter/filter.actions';

export interface AppState {
  todos: TodoModel[];
  filtro: fromfiltroValidos.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};

