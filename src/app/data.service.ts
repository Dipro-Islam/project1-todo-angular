import { Injectable } from '@angular/core';
import { Todo } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] =
    [
      new Todo('dipro', 10),
      new Todo('Hridoy', 11)
    ];

  constructor() { }

  getAllTodos() {
    return this.todos
  }
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }
  deletTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
