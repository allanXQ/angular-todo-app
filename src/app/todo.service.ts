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

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<Todo | undefined> {
    return this.getTodos().pipe(
      map((todos) => todos.find((todo) => todo.id === id))
    );
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  deleteTodoById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleTodoCompleted(id: number): Observable<Todo> {
    return this.getTodoById(id).pipe(
      map((todo) => {
        if (todo) {
          todo.completed = !todo.completed;
          return todo;
        }
        throw new Error('Todo not found');
      }),
      switchMap((updatedTodo) => this.updateTodo(updatedTodo))
    );
  }
}
