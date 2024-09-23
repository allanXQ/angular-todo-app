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
}
