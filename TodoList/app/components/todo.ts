import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'todo',
  templateUrl: 'app/components/todo.html',
  directives: [MATERIAL_DIRECTIVES],
})

export class TodoComponent {
  todoArr:Array<string>=[];
  counter:number = 0;
  
  //todolist by one way bind  
    onSubmit(todo) {
    this.todoArr.push(todo) ;
    this.counter = this.todoArr.length;
    }
  
    exists(value) {
      if (value) {
          return this.counter++;
      }
      else {
          return this.counter--;
      }
    };
    
    delTodo(index){
        console.log(index);
        this.todoArr.splice(index,1)
    }
     
}