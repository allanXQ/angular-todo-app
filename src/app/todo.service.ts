import { Injectable } from '@angular/core';
import { Todo } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodoById(id: number, todo: Todo) {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodoById(id: number) {
    return this.http.delete<Todo>(`${this.apiUrl}/${id}`);
  }
}
