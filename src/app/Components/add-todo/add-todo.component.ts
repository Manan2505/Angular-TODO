import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Todos } from '../../Model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
title!:string
desc!:string
@Output() addTodo:EventEmitter<Todos>=new EventEmitter();
constructor(){

}
onSubmit(){
  const newTodo={
    sno:4,
    title:this.title,
    desc:this.desc,
    isActive:true
  }
  this.addTodo.emit(newTodo)
}
}
