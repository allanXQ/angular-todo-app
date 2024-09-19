import { Component } from '@angular/core';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css',
})
export class CreateTodoComponent {
  todo: Todo = {} as Todo;
  createTodo = (todo: Todo) => {
    console.log(todo);
  };
}
