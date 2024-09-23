import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  editTodoForm: FormGroup;
  todoId!: number;
  todo!: Todo;
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editTodoForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      completed: [false],
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const idParam = params.get('todoId');
          if (idParam === null) {
            throw new Error('No todo ID provided.');
          }
          this.todoId = Number(idParam);
          return this.todoService.getTodoById(this.todoId);
        })
      )
      .subscribe({
        next: (todo) => {
          if (todo) {
            this.todo = todo;
            this.populateForm();
          } else {
            this.error = `Todo with id ${this.todoId} not found.`;
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.error =
            error.message || 'An error occurred while fetching the todo.';
          this.isLoading = false;
        },
      });
  }

  private populateForm(): void {
    this.editTodoForm.patchValue({
      title: this.todo.title,
      description: this.todo.description,
      completed: this.todo.completed,
    });
  }

  onSubmit(): void {
    if (this.editTodoForm.invalid) {
      this.editTodoForm.markAllAsTouched();
      return;
    }

    const updatedTodo: Todo = {
      ...this.todo,
      ...this.editTodoForm.value,
    };

    this.todoService.updateTodoById(this.todoId, updatedTodo).subscribe({
      next: (todo: Todo) => {
        alert('Todo updated successfully!');
        this.router.navigate(['/todo', todo.id]);
      },
      error: (error: { message: string }) => {
        this.error =
          error.message || 'An error occurred while updating the todo.';
      },
    });
  }
}
