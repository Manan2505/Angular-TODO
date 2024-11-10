import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-desc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-desc.component.html',
  styleUrls: ['./todo-desc.component.css']
})
export class TodoDescComponent {
  parentClass: string = "";  // Start with an empty class to make it visible initially

  @Input() description: string | null = null;
  @Input() check: boolean | null = null;
  constructor() {}

  hideDesc() {
    if (this.parentClass === "hidden") {
      this.parentClass = "";  // Remove the hidden class to show the div again
    } else {
      this.parentClass = "hidden";  // Add hidden class to hide the div
    }
  }
}
