import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { TaskListItem } from '../task-list-item/task-list-item';
import { TaskInput } from '../task-input/task-input';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem, TaskInput],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  constructor(public taskService: TaskService) {}

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
  onAdd(taskTitle: string) {
    this.taskService.addTask(taskTitle);
  }
}
