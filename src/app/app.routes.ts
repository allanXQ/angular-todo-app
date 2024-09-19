import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  {
    path: 'todo/:todoId',
    component: TodoComponent,
  },
  {
    path: 'create-todo',
    component: CreateTodoComponent,
  },
];
