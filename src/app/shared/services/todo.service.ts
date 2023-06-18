import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
url="https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }
  getTodos(): Observable<Todo[]>
  {
    return this.http.get<Todo[]>(this.url);

  }
}
