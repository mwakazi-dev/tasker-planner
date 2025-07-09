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

  addTask(taskTitle: string) {
    const newTask: ITask = {
      id: this._tasks().length + 1,
      title: taskTitle,
      status: 'INCOMPLETE',
    };
    const newTasks = [...this._tasks(), newTask];
    this._tasks.set(newTasks);
  }

  deleteTask(id: number) {
    const filteredTasks = this._tasks().filter((_task) => _task.id !== id);
    this._tasks.set(filteredTasks);
    console.log('from services: ', this.tasks());
  }
}
