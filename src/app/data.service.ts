
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Todo } from './model';



@Injectable({
  providedIn: 'root'
})

export class DataService extends Todo {



  constructor() {
    super()
    this.load();
  }

  getAllTodos() {

    return localStorage.getItem('todos');
  }

  addTodo(ab: any) {

    let todos = localStorage.getItem('todos');


  }


}
