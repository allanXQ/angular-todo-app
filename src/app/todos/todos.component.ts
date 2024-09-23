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
  todos: any;
  error: any;
  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  viewTodo(id: number) {
    this.router.navigate(['/todo', id]);
  }

  deleteTodo(id: number) {}

  editTodo(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
