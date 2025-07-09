import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  @Input({ required: true }) id?: number;
  @Input({ required: true }) title?: string;
  @Input({ required: true }) status?: string;
  @Output() _onClick = new EventEmitter<number>();

  onClick() {
    if (!this.id) {
      return;
    }

    this._onClick.emit(this.id);
  }
}
