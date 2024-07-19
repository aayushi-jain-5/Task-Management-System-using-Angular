import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from '../components/tasks-list/tasks-list.component';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskHistoryComponent } from '../components/task-history/task-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'task-history', component: TaskHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}