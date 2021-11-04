import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Task} from "../Task";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl: string = environment.apiUrl;
  private tasks: Task[] = [];
  private subject = new BehaviorSubject<Task[]>(this.tasks);

  constructor(private http: HttpClient) {
    this.getTask().subscribe((tasks) => {
      this.tasks = tasks
      this.subject.next(this.tasks)
    });
  }

  public addTask(task: Task): void {
    this.http.post<Task>(this.apiUrl, task).subscribe((newTask) => {
      this.tasks.push(newTask);
      this.subject.next(this.tasks)
    })
  }

  public getTaskList(): Observable<Task[]> {
    return this.subject.asObservable();
  }

  private getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.apiUrl + "getTasks");
  }

  public updateTask(task: Task): void {

    this.http.post<Task>(environment.apiUrl + "task", task).subscribe((newTask) => {
    })
  }

}
