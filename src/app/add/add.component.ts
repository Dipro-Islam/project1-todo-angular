import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service';
import { Todo } from '../model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm) {

    if (form.invalid) return alert('Please fill up all catagories');
    this.dataService.addTodo(new Todo(form.value.task, 456));

  }


}



