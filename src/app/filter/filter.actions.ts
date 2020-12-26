import { Action } from '@ngrx/store';
import { Acciones } from '../todo/todo.actions';

export const SET_FILTRO = '[Filter] set filtro';
export type filtrosValidos  = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction  implements Action {

  readonly type = SET_FILTRO;
  constructor( public filtro: filtrosValidos ) {}

}

export type Acciones = SetFiltroAction;
