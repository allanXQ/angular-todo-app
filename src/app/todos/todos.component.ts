import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos = [
    {
      id: 1,
      title: 'Learn Angular 2',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn Angular 2 Router',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn Angular 2 Forms',
      completed: false,
    },
  ];
}
