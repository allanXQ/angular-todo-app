import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos;
  constructor(private router: Router, private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  viewTodo(id: number) {
    this.router.navigate(['/todos', id]);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodoById(id);
    this.todos = this.todoService.getTodos();
    console.log('Todo Deleted:', this.todos);
  }

  editTodo(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
