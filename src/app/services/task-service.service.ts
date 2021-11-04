import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Task} from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl: string = "http://localhost:5000/task"
  constructor(private http: HttpClient) {

  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task)
  }

  public getTask(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:5000/getTasks");
  }
  public updateTask(task: Task): Observable<Task> {
    return this.http.post<Task>("http://localhost:5000/task", task)
  }

}
