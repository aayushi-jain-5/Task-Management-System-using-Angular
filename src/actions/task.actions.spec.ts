import { addTask, removeTask, toggleCompleted, loadTasks } from './task.actions';
import { Task } from '../models/task.interface';

describe('Task Actions', () => {
    it('should create an action to add a task', () => {
      const task: Task = {
        id: 1,
        title: 'Task 1',
        description: '',
        dueDate: new Date(),
        priority: 'medium',
        status: 'to-do',
        completed: false,
        createdAt: new Date(),
        name:'string',
        updatedAt: new Date()
      };
      const action = addTask({ task });
      expect(action.type).toBe('[Task] Add Task');
      expect(action.task).toBe(task);
    });
  });

  it('should create an action to remove a task', () => {
    const task: Task = {
      id: 1,
      title: 'Task 1',
      description: '',
      dueDate: new Date(),
      priority: 'medium',
      status: 'to-do',
      completed: false,
      createdAt: new Date(),
      name:'string',
      updatedAt: new Date()
    };
    const action = removeTask({ task, id: 1 });
    expect(action.type).toBe('[Task] Remove Task');
    expect(action.task).toBe(task);
    expect(action.id).toBe(1);
  });
  
  it('should create an action to toggle completed status of a task', () => {
    const task: Task = {
      id: 1,
      title: 'Task 1',
      description: '',
      dueDate: new Date(),
      priority: 'medium',
      status: 'to-do',
      completed: false,
      createdAt: new Date(),
      name:'string',
      updatedAt: new Date()
    };
    const action = toggleCompleted({ task, id: 1 });
    expect(action.type).toBe('[Task] Toggle Completed');
    expect(action.task).toBe(task);
    expect(action.id).toBe(1);
  });

  it('should create an action to load tasks', () => {
    const tasks: Task[] = [
      {
        id: 1,
        title: 'Task 1',
        description: '',
        dueDate: new Date(),
        priority: 'medium',
        status: 'to-do',
        name:'string',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Task 2',
        description: '',
        dueDate: new Date(),
        priority: 'medium',
        status: 'to-do',
        name:'string',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    const action = loadTasks(tasks);
    expect(action.type).toBe('[Task] Load Tasks');
    expect(action.tasks).toBe(tasks);
  });