import { Component, OnInit } from '@angular/core';


import { DataService } from '../data.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  todos: any[] = [];
  complete: any[] = [];

  text: any;
  oldText: any;
  appState = 'default';
  id: number = Math.random();






  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.todos = this.dataService.getAllTodos();
    this.complete = this.dataService.getAllComplete();
  }


  addTodo() {
    let id = Math.random();
    let newTodo = {
      text: this.text,
      id: id
    }

    this.todos.push(newTodo);
    this.dataService.addTodo(this.todos);

  }

  onDelet(Id: string) {
    for (let i = 0; i < this.todos.length; i++) {

      if (this.todos[i].id == Id) {
        this.todos.splice(i, 1);
        this.dataService.deletTodo(this.todos);
      }
    }
  }

  onDeletComplete(Id: string) {
    for (let i = 0; i < this.complete.length; i++) {
      this.complete.splice(i, 1);
      this.dataService.deletTodoComplete(this.complete);

    }
  }




  onEdit(todo: any) {
    this.appState = 'edit';
    this.text = todo.text;
    this.id = todo.id;

  }


  updateTodo() {

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == this.id) {
        this.todos[i].text = this.text;
      }
    }
    this.appState = 'default';
    this.dataService.updatedTodo(this.todos);

  }

  onDoneBtn(todo: any) {

    let newCompleteTodo = {
      text: todo.text,
      id: todo.id
    }
    this.complete.push(newCompleteTodo);
    console.log(this.complete);

    this.dataService.addCompleteTodo(this.complete);


    //  console.log(todo);

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == todo.id) {
        this.todos.splice(i, 1);
      }
    }
    this.dataService.completeDelet(this.todos);

  }

}







