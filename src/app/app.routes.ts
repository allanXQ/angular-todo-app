import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoComponent } from './todo/todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
  { path: 'todos', component: TodosComponent },
  {
    path: 'todo/:todoId',
    component: TodoComponent,
  },
  {
    path: 'edit/:todoId',
    component: EditTodoComponent,
  },
  {
    path: 'create-todo',
    component: CreateTodoComponent,
  },
];
