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

  onSubmit() {
    if (this.createTodoForm.invalid) {
      this.createTodoForm.markAllAsTouched();
    } else {
      console.log('Todo Created:', this.createTodoForm.value);
    }
  }

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

  isSubmitted() {
    return this.createTodoForm.invalid && this.createTodoForm.touched;
  }
}
