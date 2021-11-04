import {Component, EventEmitter, OnInit} from '@angular/core';
import {Task} from "../../Task"
import {TaskServiceService} from "../../services/task-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  subscription!: Subscription;

  constructor(private taskService: TaskServiceService) {

  }

  tasks!: Task[];

  ngOnInit(): void {
    this.subscription = this.taskService.getTaskList().subscribe((listOfTasks) => {
      console.log(listOfTasks);
      this.tasks = listOfTasks;
    })
  }

  onChange($event: boolean, task: Task): void {
    this.taskService.updateTask(task).subscribe((task) => {
    });
  }
}
