import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'

  constructor(private http:HttpClient) { }

  //get todos
  getTodo():Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle completed
  toggleCompleted(todo: Todo):Observable<any>{
    return this.http.put(url, todo, httOptions);
  }
}
