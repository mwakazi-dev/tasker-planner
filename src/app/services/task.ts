import { computed, Injectable, OnInit, signal } from '@angular/core';
import { type ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<ITask[]>([
    {
      id: 1,
      title: 'One',
      status: 'INCOMPLETE',
    },
  ]);

  tasks = computed(() => this._tasks());

  addTask(_task: ITask) {
    const newTasks = [...this._tasks(), _task];
    this._tasks.set(newTasks);
  }

  deleteTask(id: number) {
    const filteredTasks = this._tasks().filter((_task) => _task.id !== id);
    this._tasks.set(filteredTasks);
    console.log('from services: ', this.tasks());
  }
}
