import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  error: any;
  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => (this.todos = data),
      error: (err) => (this.error = err),
    });
  }

  viewTodo(id: number) {
    this.router.navigate(['/todo', id]);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodoById(id);
    this.todoService.getTodos().subscribe({
      next: (data) => (this.todos = data),
      error: (err) => (this.error = err),
    });
    console.log('Todo Deleted:', this.todos);
  }

  editTodo(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
