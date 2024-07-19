import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskPriority'
})
export class TaskPriorityPipe implements PipeTransform {
  transform(task: any): string {
    return task.priority === 'high'? 'High' : task.priority === 'medium'? 'Medium' : 'Low';
  }
}