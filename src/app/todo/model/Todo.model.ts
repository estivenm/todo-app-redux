/**
 * Modelo de tareas por hacer
 *
 * @export
 * @class TodoModel
 */
export class TodoModel {
  id: number;
  texto: string;
  completado: boolean;

  constructor(texto: string) {
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    this.completado = false;
    this.id = Math.random();
  }
}
