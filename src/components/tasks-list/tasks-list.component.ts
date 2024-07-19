import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { addTask, removeTask, toggleCompleted } from '../../actions/task.actions';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  @Input() task: Task[]=[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

  removeTask(task: Task,id:number) {
    this.store.dispatch(removeTask({ task,id }));
  }

  toggleCompleted(task: Task,id:number) {
    this.store.dispatch(toggleCompleted({ task,id }));
  }
}