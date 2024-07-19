import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.interface';
import { addTask, removeTask, toggleCompleted } from '../actions/task.actions';

const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, action) => [...state, action.task]),
  on(removeTask, (state, action) => state.filter((task) => task.id !== action.id)),
  on(toggleCompleted, (state, action) => state.map((task) =>
    task.id === action.id ? { ...task, completed: !task.completed } : task
  )),
);

export default taskReducer;