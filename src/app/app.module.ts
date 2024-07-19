import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksListComponent } from '../components/tasks-list/tasks-list.component';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskHistoryComponent } from '../components/task-history/task-history.component';
import { TaskSortDirective } from '../directives/task-sort.directive';
import { TaskFilterDirective } from '../directives/task-filter.directive';
import { TaskStatusPipe } from '../pipes/task-status.pipe';
import { TaskPriorityPipe } from '../pipes/task-priority.pipe';
import { LocalStorageService } from '../services/local-storage.service';
import { CsvExportService } from '../services/csv-export.service';
import { taskReducer } from '../reducers/task.reducers';
import { AppRoutingModule } from './app.routing';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'task-history', component: TaskHistoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskFormComponent,
    TaskHistoryComponent,
    TaskSortDirective,
    TaskFilterDirective,
    TaskStatusPipe,
    TaskPriorityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: taskReducer }),
    RouterModule
  ],
  providers: [
    LocalStorageService,
    CsvExportService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
