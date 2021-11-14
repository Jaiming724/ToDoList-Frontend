import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../Task";
import {TaskServiceService} from "../../services/task-service.service";

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  task!: string
  date!: Date

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task, private taskService: TaskServiceService, private dialogRef: MatDialogRef<TaskDialogComponent>) {
    this.task = data.text
    this.date = new Date(data.date);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.data.text = this.task;
    this.data.date = this.date.toString();
    this.taskService.updateTask(this.data);
    this.dialogRef.close(this.data)

  }
}
