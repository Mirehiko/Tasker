class TaskListGUI {
  constructor() {
    this.list = {};
  }
  addTask(task) {
    this.list[task.id] = task;
  }
  removeTask(task_id) {
    delete this.list[task_id];
  }
}