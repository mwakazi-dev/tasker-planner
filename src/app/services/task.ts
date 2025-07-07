import { Injectable } from '@angular/core';
import { type ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private _tasks: ITask[] = [];

  addTask(_task: ITask) {
    this._tasks = [...this._tasks, _task];
  }

  deleteTask(id: number) {
    this._tasks = this._tasks.filter((_task) => _task.id !== id);
  }

  get tasks() {
    return this._tasks;
  }
}
