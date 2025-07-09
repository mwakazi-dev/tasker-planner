import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  value?: string = '';
  @Output() _onClick = new EventEmitter<string>();

  onClick() {
    const enteredValue = this.value;
    if (!enteredValue) {
      return;
    }
    console.log('inside click handler: ', enteredValue);
    this._onClick.emit(enteredValue);
  }
}
