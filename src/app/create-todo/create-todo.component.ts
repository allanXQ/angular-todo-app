import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css',
})
export class CreateTodoComponent {
  createTodoForm;

  onSubmit = () => {
    console.log(
      'createtodoform',
      this.createTodoForm.value,
      this.createTodoForm.invalid
    );
  };

  constructor(private fb: FormBuilder) {
    this.createTodoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: false,
    });
  }

  hasError(field: string, errorType: string): boolean {
    const control = this.createTodoForm.get(field);
    return control ? control.hasError(errorType) && control.touched : false;
  }
}
