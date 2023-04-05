import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Task } from '../object/task';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  obj : Task =  new Task();
  tasksList : Task[] = [];
  task : string = "";
  constructor(private taskService : ToDoService){}


ngOnInit(): void {
  this.obj = new Task();
  this.tasksList=[];
  this.taskService.getTask().subscribe(res=>{
    this.tasksList = res
  }
  )

}
addTask(task: Task){
  this.taskService.addTask(task).subscribe(result=> {
    this.ngOnInit();

  } )
}
editTask(){
  this.taskService.editTask(this.obj).subscribe(res=>{
    this.ngOnInit();
  })

}
deleteTask(task:Task){
  this.taskService.deleteTask(task).subscribe(res=>{
    this.ngOnInit();
  })

}
}
