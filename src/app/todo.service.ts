import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos;
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Learn Angular 2',
        description: 'Learn Angular 2 by building a simple app',
        completed: false,
      },
      {
        id: 2,
        title: 'Learn Angular 2 Router',
        description: 'Learn Angular 2 Router by building a simple app',
        completed: false,
      },
      {
        id: 3,
        title: 'Learn Angular 2 Forms',
        description: 'Learn Angular 2 Forms by building a simple app',
        completed: false,
      },
      {
        id: 4,
        title: 'Learn Angular 2 Services',
        description: 'Learn Angular 2 Services by building a simple app',
        completed: false,
      },
      {
        id: 5,
        title: 'Learn Angular 2 Pipes',
        description: 'Learn Angular 2 Pipes by building a simple app',
        completed: false,
      },
    ];
  }

  getTodos() {
    return this.todos;
  }

  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    this.todos[index] = todo;
  }

  deleteTodoById(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1); // Modifies the array in place
    }
  }

  toggleTodoCompleted(id: number) {
    const todo = this.getTodoById(id);
    todo ? (todo.completed = !todo.completed) : null;
  }
}
