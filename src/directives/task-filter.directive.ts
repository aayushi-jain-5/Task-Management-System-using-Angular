import { Directive, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appTaskFilter]'
})
export class TaskFilterDirective {
  private tasks: any[];
  private filterTerm: string;

  constructor(private elementRef: ElementRef) { 
    this.tasks = []; // Initialize tasks to an empty array
    this.filterTerm = '';
}

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('input', () => {
      this.filterTerm = this.elementRef.nativeElement.value;
      this.filterTasks();
    });
  }

  @Input('appTaskFilter')
  set setTasks(tasks: any[]) {
    this.tasks = tasks;
  }

  private filterTasks(): void {
    if (!this.tasks || !this.filterTerm) {
      return;
    }
    const filteredTasks = this.tasks.filter(task => task.name.toLowerCase().includes(this.filterTerm.toLowerCase()));
    this.tasks = filteredTasks;
  }
}