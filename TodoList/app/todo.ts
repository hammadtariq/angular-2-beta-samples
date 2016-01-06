import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MATERIAL_DIRECTIVES,MdInputContainer} from 'ng2-material/all';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo.html',
  directives: [MATERIAL_DIRECTIVES,MdInputContainer],
})
export class TodoComponent {
  //model:Object={};   
  todoArr:Array<string>=[];
  counter:number = 0;
  flag:boolean;
  //todolist by two way bind  
//   onSubmit(todo?) {
//       this.todoArr.push(this.model.todo)
//       console.log(this.todoArr);
//   }
     
  //todolist by one way bind  
   onSubmit(todo?) {
    this.todoArr.push(todo) 
    console.log(this.todoArr);
    this.counter= this.todoArr.length
   }
   
  
  exists(value) {
      if (value) {
          return this.counter++;
      }
      else {
          return this.counter--;
      }
  };
     
}