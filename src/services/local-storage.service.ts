import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TaskModel as Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private tasksKey = 'tasks';
  private taskHistoryKey = 'taskHistory';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  addTask(task: Task): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const tasks = this.getTasks();
        tasks.push(task);
        window.localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
      } catch (error) {
        console.error('Error adding task to local storage:', error);
      }
    } else {
      // Server-side, you can't access window.localStorage
      // You can return a default value or throw an error
      console.error('Cannot add task to local storage on server-side');
    }
  }

  getTasks(): Task[] {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const tasksString = window.localStorage.getItem(this.tasksKey);
        return tasksString ? JSON.parse(tasksString) : [];
      } catch (error) {
        console.error('Error getting tasks from local storage:', error);
        return [];
      }
    } else {
      // Server-side, you can't access window.localStorage
      // You can return a default value or throw an error
      return [];
    }
  }

  deleteTask(task: Task): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const tasks = this.getTasks();
        const index = tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          tasks.splice(index, 1);
          window.localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
        }
      } catch (error) {
        console.error('Error deleting task from local storage:', error);
      }
    } else {
      // Server-side, you can't access window.localStorage
      // You can return a default value or throw an error
      console.error('Cannot delete task from local storage on server-side');
    }
  }

  addTaskToHistory(task: Task): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const taskHistory = this.getTaskHistory();
        taskHistory.push(task);
        window.localStorage.setItem(this.taskHistoryKey, JSON.stringify(taskHistory));
      } catch (error) {
        console.error('Error adding task to task history in local storage:', error);
      }
    } else {
      // Server-side, you can't access window.localStorage
      // You can return a default value or throw an error
      console.error('Cannot add task to task history in local storage on server-side');
    }
  }

  getTaskHistory(): Task[] {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const taskHistoryString = window.localStorage.getItem(this.taskHistoryKey);
        return taskHistoryString ? JSON.parse(taskHistoryString) : [];
      } catch (error) {
        console.error('Error getting task history from local storage:', error);
        return [];
      }
    } else {
      // Server-side, you can't access window.localStorage
      // You can return a default value or throw an error
      return [];
    }
  }
}