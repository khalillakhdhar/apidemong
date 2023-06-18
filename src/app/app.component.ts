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
  }
}
