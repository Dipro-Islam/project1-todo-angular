import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input() todo: Todo = new Todo('', 0)
  constructor() { }

  ngOnInit(): void {
  }

  onTodoClick() {
    console.log("button clicked");

  }

}
