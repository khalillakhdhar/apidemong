import { Component } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
import { Todo } from './shared/classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apidemong';
  todos:Todo[]=[];
  constructor(private todoService:TodoService)
  {

  }
  ngOnInit() {
    this.todoService.getTodos().subscribe((datas)=>
    {
      this.todos = datas;
      console.log("liste",this.todos);
    }

    )
    this.addTodo();
    this.todoService.deleteTodo(123).subscribe((data)=>
    {
      console.log("deleted",data)
    })
  }
  addTodo()
  {
    let todo=new Todo();
    todo.completed=true;
    todo.id=203;
    todo.title="hello world";
    todo.userId=5;
this.todoService.addTodo(todo).subscribe(data=>
  {
    console.log("added todo",data)
  })
  }
}
