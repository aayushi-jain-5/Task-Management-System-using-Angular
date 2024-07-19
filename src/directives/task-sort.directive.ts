import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTaskSort]'
})
export class TaskSortDirective {
  @Input() tasks: any[];

  constructor(private elementRef: ElementRef) { this.tasks=[];}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.tasks.sort((a, b) => a.name.localeCompare(b.name));
    });
  }
}