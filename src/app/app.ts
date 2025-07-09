import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskInput } from './components/task-input/task-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, TaskInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'task-planner';
}
