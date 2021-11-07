import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../Task";
import {Subscription} from "rxjs";
import {TaskServiceService} from "../../services/task-service.service";


@Component({
  selector: 'app-task-footer',
  templateUrl: './task-footer.component.html',
  styleUrls: ['./task-footer.component.css']
})
export class TaskFooterComponent implements OnInit {
  tasks!: Task[];
  subscription!: Subscription;
  numberOfTasks!: number;

  constructor(private taskService: TaskServiceService) {

  }

  ngOnInit(): void {
    this.subscription = this.taskService.getTaskList().subscribe((listOfTasks) => {
      this.tasks = listOfTasks;
      let taskCounter: number = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (!this.tasks[i].completed) {
          taskCounter++;
        }
      }
      this.numberOfTasks = taskCounter;
    })
  }


}
