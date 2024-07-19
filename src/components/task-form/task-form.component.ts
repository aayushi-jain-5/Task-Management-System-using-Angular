import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask = { name: '' };
  tasks: { name: string, completed: boolean }[] = [];

  addTask() {
    if (this.newTask.name.trim()!== '') {
      this.tasks.push({ name: this.newTask.name.trim(), completed: false });
      this.newTask.name = ''; // Reset the input field
    }
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  toggleCompleted(task: any) {
    task.completed = !task.completed;
  }
}