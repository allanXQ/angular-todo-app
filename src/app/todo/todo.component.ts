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
  todo!: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('todoId');
      this.todoId = idParam ? Number(idParam) : 0;

      if (this.todoId !== 0) {
        const todo = this.todoService.getTodoById(this.todoId);
        if (todo) {
          this.todo = todo;
        } else {
          console.error(`Todo with id ${this.todoId} not found.`);
        }
      } else {
        console.error('Invalid or missing todo ID in route parameters.');
      }
    });
  }
}
