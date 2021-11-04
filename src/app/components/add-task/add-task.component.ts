import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskServiceService} from "../../services/task-service.service";
import {Task} from "../../Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  completed: boolean = false;
  date!: Date;
  task!: string;

  constructor(private taskService: TaskServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.taskService.addTask(new Task(this.task, this.date.toString(), this.completed)).subscribe((task) => {
      this.taskService.getTask().subscribe((currentTasks) => currentTasks.push(task));
    });
  }
}
