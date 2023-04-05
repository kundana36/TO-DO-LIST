import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../object/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  json_server : string;

  constructor(private http : HttpClient) {
    this.json_server = "http://localhost:3000/tasks"
   }

   addTask(task:Task) : Observable<Task>{
    return this.http.post<Task>(this.json_server,task);


   }
   getTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.json_server);


   }
   editTask(task:Task) : Observable<Task>{
    return this.http.put<Task>(this.json_server+'/'+task.taskID, task);


   }
   deleteTask(task:Task) : Observable<Task>{
    return this.http.delete<Task>(this.json_server+'/'+task.taskID );


   }
}
