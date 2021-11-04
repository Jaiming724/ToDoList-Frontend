import {Component, EventEmitter, OnInit} from '@angular/core';
import {Task} from "../../Task"
import {TaskServiceService} from "../../services/task-service.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskServiceService) {
  }

  tasks!: Task[];

  ngOnInit(): void {
    this.taskService.getTask().subscribe((listOfTasks) => (this.tasks = listOfTasks));
  }

  onChange($event: boolean, task: Task): void {
    this.taskService.updateTask(task).subscribe((task) => {
    });
  }
}
