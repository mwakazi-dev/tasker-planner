import { Injectable } from '@angular/core';
import { type ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: ITask[] = [
    {
      id: 1,
      title: 'Test',
      status: 'INCOMPLETE',
    },
    {
      id: 2,
      title: 'Test 2',
      status: 'INCOMPLETE',
    },
  ];

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
