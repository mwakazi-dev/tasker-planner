import { Component, computed, OnInit, signal } from '@angular/core';
import { TaskService } from '../../services/task';
import { ITask } from '../../models/task.model';
import { TaskListItem } from '../task-list-item/task-list-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  constructor(public taskService: TaskService) {}

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}
