import * as fromTodo from './todo.actions';
import { TodoModel } from './model/Todo.model';

const todo1 = new TodoModel('Aprender PWA');
const todo2 = new TodoModel('Aprender Rxjs');
const todo3 = new TodoModel('Aprender Flutter');
const estadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones
): TodoModel[] {

  switch (action.type) {
    case fromTodo.AGREGRAR_TODO:
      const todo = new TodoModel(action.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
          return {
            ...todoEdit,
            completado: action.completado
          };
      });

    case fromTodo.EDITAR_TODO:
    return state.map(todoEdit => {
      if (todoEdit.id === action.id) {

        return {
          ...todoEdit,
          texto: action.texto
        };

      } else { return todoEdit;  }
    });

    case fromTodo.BORRAR_TODO:
    return state.filter(todoEdit => todoEdit.id !== action.id);

    case fromTodo.BORRAR_ALL_TODO:
    return state.filter(todoEdit =>  !todoEdit.completado);

    default: return state;
  }
}
