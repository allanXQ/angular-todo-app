import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
  createTodoForm;

  onSubmit = () => {
    console.log('createtodoform', this.createTodoForm.value);
  };

  constructor(private fb: FormBuilder) {
    this.createTodoForm = this.fb.group({
      title: '',
      description: '',
      completed: false,
    });
  }
}
