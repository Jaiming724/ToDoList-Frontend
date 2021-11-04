import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../Task";

@Component({
  selector: 'app-task-footer',
  templateUrl: './task-footer.component.html',
  styleUrls: ['./task-footer.component.css']
})
export class TaskFooterComponent implements OnInit {
  @Input() tasks!: Task[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
