import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { ITask } from '../../models/task.model';
import { TaskListItem } from '../task-list-item/task-list-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tasks: ITask[] = [];

  constructor(private _tasks: TaskService) {}

  ngOnInit() {
    this.tasks = this._tasks.tasks;
    console.log(this.tasks);
  }
}
