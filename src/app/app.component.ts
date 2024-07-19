import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadTasks } from '../actions/task.actions';
import { LocalStorageService } from '../services/local-storage.service';
import { CsvExportService } from '../services/csv-export.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  tasks$: Observable<any>; // Define the type of tasks
  title = 'Task Manager';

  constructor(
    private store: Store<AppState>,
    private localStorageService: LocalStorageService,
    private csvExportService: CsvExportService
  ) {
    this.tasks$ = this.store.select('tasks');
    this.store.dispatch(loadTasks(this.localStorageService.getTasks()));
  }

  exportTasks() {
    this.tasks$.pipe(take(1)).subscribe(tasks => {
      this.csvExportService.exportTasksToCsv(tasks);
    });
  }
}