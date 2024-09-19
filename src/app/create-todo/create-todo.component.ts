import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css',
})
export class CreateTodoComponent {
  todo: Todo = {} as Todo;
  createTodo = (todo: Todo) => {
    console.log(todo);
  };
}
