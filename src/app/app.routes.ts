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
  { path: 'todos', title: 'Todos', component: TodosComponent },
  {
    path: 'todo/:todoId',
    title: 'Todo Details',
    component: TodoComponent,
  },
  {
    path: 'edit/:todoId',
    title: 'Edit Todo',
    component: EditTodoComponent,
  },
  {
    path: 'create-todo',
    title: 'Create Todo',
    component: CreateTodoComponent,
  },
];
