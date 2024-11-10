import { Component,Output,EventEmitter } from '@angular/core';
import { Todos } from '../../Model';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component'; 
import { TodoDescComponent } from '../todo-desc/todo-desc.component';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,AddTodoComponent,TodoDescComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent{
  todos: Todos[] = [];
  localItems: string | null = null;
  todoDesc:string |null=null;
  check:boolean=false
  constructor() {
    // Check if 'window' and 'localStorage' are available
    if (typeof window !== 'undefined' && window.localStorage) {
      this.localItems = localStorage.getItem("todos");
      this.todos = this.localItems ? JSON.parse(this.localItems) : [];
    } else {
      this.todos = [];
    }
  }
  deleteIt(todo: Todos){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addIt(todo:Todos){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
  todoInfo(todo:Todos){
    this.check=!this.check;
    this.todoDesc = todo.desc ? todo.desc : 'No description available';  
  }
  
}
