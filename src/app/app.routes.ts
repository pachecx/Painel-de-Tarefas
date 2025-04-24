// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TaskListComponent },
  { path: 'nova-tarefa', component: TaskFormComponent },
  { path: 'editar-tarefa/:id', component: TaskFormComponent },
  { path: '**', redirectTo: 'tarefas' },

];
