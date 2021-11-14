import {Component, EventEmitter, OnInit} from '@angular/core';
import {Task} from "../../Task"
import {TaskServiceService} from "../../services/task-service.service";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {TaskDialogComponent} from "../task-dialog/task-dialog.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  subscription!: Subscription;

  constructor(private taskService: TaskServiceService, private matDialog: MatDialog) {

  }

  tasks!: Task[];

  ngOnInit(): void {
    this.subscription = this.taskService.getTaskList().subscribe((listOfTasks) => {
      this.tasks = listOfTasks;
    })
  }

  onChange($event: boolean, task: Task): void {
    this.taskService.updateTask(task);
  }

  showTask(task: Task): void {
    let dialogRef = this.matDialog.open(TaskDialogComponent, {data: task})
    dialogRef.afterClosed().subscribe((str: Task) => {
      console.log(str)
    })
  }
}
