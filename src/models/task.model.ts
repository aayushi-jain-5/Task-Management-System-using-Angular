import { Task } from './task.interface';

export class TaskModel implements Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  title: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'new'|'to-do' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Task) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.completed = data.completed;
    this.title = data.title;
    this.priority=data.priority;
    this.dueDate = data.dueDate;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}