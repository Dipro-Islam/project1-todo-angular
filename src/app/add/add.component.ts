import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { DataService } from '../data.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  todos: any;
  text: any;
  oldText: any;
  appState = 'default';
  id: any;



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.todos = this.dataService.getAllTodos();
    this.todos = JSON.parse(this.todos);


  }
  addTodo() {

    let newTodo = {
      text: this.text
    }
    this.todos.push(newTodo)

  }

  onDelet(todoText: string) {
    console.log('btn delet clicked');

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
  }


  onEdit(todo: any) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;

  }


  updateTodo() {
    console.log(this.text);
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }
    this.appState = 'default';
  }

  onComplete(todo: any) {


    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todo.text) {
        this.todos[i].isComplete = true;
      }
    }
  }

}







