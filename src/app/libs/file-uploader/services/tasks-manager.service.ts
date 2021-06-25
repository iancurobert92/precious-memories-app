import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable({
  providedIn: "root",
})
export class TasksManager {
  private _tasks: Task[] = [];

  constructor() {}

  get tasks(): Task[] {
    return this._tasks;
  }

  addTask(task: Task): void {
    const idx = this._tasks.findIndex((value) => value.id == task.id);
    if (idx >= 0) return;
    this._tasks.push(task);
  }

  updateTask(newTask: Task): void {
    const idx = this._tasks.findIndex((value) => value.id == newTask.id);
    if (idx == -1) return;
    this._tasks[idx] = newTask;
  }

  removeTask(id: string): void {
    const idx = this._tasks.findIndex((value) => value.id == id);
    if (idx == -1) return;
    this._tasks.splice(idx, 1);
  }

  clearTasks(): void {
    while (this._tasks.length > 0) {
      this._tasks.pop();
    }
  }
}
