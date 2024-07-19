import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {
  transform(task: any): string {
    return task.completed? 'Completed' : 'In Progress';
  }
}