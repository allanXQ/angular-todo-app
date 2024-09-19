import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  constructor(private router: Router) {}

  todos = [
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

  viewTodo = (id: number): void => {
    this.router.navigate(['/todo', id]);
  };

  editTodo = (id: number) => {
    this.router.navigate(['/edit', id]);
  };
  deleteTodo = (todo: number) => {
    console.log('Delete Todo:', todo);
  };
}
