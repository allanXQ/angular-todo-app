import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css',
})
export class EditTodoComponent {
  editTodoForm;

  constructor(private fb: FormBuilder) {
    this.editTodoForm = this.fb.group({
      title: '',
      description: '',
      completed: null,
    });
  }

  onSubmit = () => {
    console.log('edittodoform', this.editTodoForm.value);
  };
}
