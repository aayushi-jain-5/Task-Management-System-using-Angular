import { Component, OnInit } from '@angular/core';
import { TaskModel as Task } from '../../models/task.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.tasks = this.localStorageService.getTaskHistory();
  }
}