import { Injectable } from '@angular/core';
import { TaskModel as Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {
  constructor() { }

  exportTasksToCsv(tasks: Task[]) {
    const csvContent = this.convertTasksToCsv(tasks);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tasks.csv';
    link.click();
    URL.revokeObjectURL(link.href); // Add this line to revoke the object URL
  }

  private convertTasksToCsv(tasks: Task[]): string {
    let csvContent = 'Name,Description,Priority,Completed\n';
    tasks.forEach(task => {
      csvContent += `${task.name},${task.description},${task.priority},${task.completed ? 'Yes' : 'No'}\n`;
    });
    return csvContent;
  }
}