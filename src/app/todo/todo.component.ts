import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoId!: number;
  todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.todo = {
      title: '',
      description: '',
      completed: false,
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('todoId');
      this.todoId = Number(idParam);

      this.todoService.getTodoById(this.todoId).subscribe({
        next: (todo) => {
          if (todo) {
            this.todo = todo;
          } else {
            alert(`Todo with id ${this.todoId} not found.`);
          }
        },
        error: (error) => {
          alert(error.message);
        },
      });
    });
  }
}
