import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.interface';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());

export const removeTask = createAction('[Task] Remove Task', props<{ task: Task ,id:number}>());

export const toggleCompleted = createAction('[Task] Toggle Completed', props<{ task: Task,id:number }>());

export function loadTasks(tasks: Task[]) {
  return { type: '[Task] Load Tasks', tasks };
}