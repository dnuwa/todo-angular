import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;

  constructor( private todoService:TodoService) { }

  ngOnInit() {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todo:true,
      'is-complete': this.todo.completed,
    }
    return classes
  }

  //on toggle
  onToggle(todo){
    //toggle in UI
    todo.completed = !todo.completed;

    //toggle on server
    this.todoService.toggleComplete(todo).subscribe(todo =>
      console.log(todo))

  }

  //on click
  onDelete(todo){
    console.log('delete')
  }

}
