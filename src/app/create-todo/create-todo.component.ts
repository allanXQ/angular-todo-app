import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../interfaces';

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
      const todo: Todo = {
        title: this.createTodoForm.value.title || 'ddd',
        description: this.createTodoForm.value.description || 'ddd',
        completed: this.createTodoForm.value.completed || false,
      };
      this.todoService.createTodo(todo).subscribe({
        next: (response) => {
          console.log('Todo Created:', response);
        },
        error: (error) => {
          alert(error);
        },
      });
    }
  }

  constructor(private fb: FormBuilder, private todoService: TodoService) {
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
