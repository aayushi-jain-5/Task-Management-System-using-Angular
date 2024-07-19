import { TestBed } from '@angular/core/testing';
import { taskReducer } from './task.reducers';
import { addTask, removeTask, toggleCompleted } from '../actions/task.actions';
import { Task } from '../models/task.interface';

describe('TaskReducer', () => {
  let task1: Task;
  let task2: Task;

  beforeEach(() => {
    task1 = {
      id: 1,
      title: 'Task 1',
      completed: false,
      description: '',
      dueDate: new Date(),
      priority: 'low',
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Task 1'
    };
    task2 = {
      id: 2,
      title: 'Task 2',
     
      description: '',
      dueDate: new Date(),
     
      status: 'in-progress',
      completed: false,
     
     
      priority: 'medium',
      
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Task 2'
    };
  });

  it('should return the initial state', () => {
    expect(taskReducer(undefined, {type: 'INIT'})).toEqual([]);
  });

  it('should add a task to the state', () => {
    const action = addTask({ task: task1 });
    const state = taskReducer([], action);
    expect(state).toEqual([task1]);
  });

  it('should remove a task from the state', () => {
    const tasks = [task1, task2];
    const action = removeTask({ id: 1 });
    const state = taskReducer(tasks, action);
    expect(state).toEqual([task2]);
  });

  it('should toggle the completed status of a task', () => {
    const tasks = [task1, task2];
    const action = toggleCompleted({ id: 1 });
    const state = taskReducer(tasks, action);
    expect(state).toEqual([
      { ...task1, completed: true },
      task2
    ]);
  });
});