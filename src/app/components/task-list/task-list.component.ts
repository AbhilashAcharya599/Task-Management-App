import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { TasksService } from 'src/app/Services/tasks.service';
import { taskType } from 'src/app/taskDataType';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList:undefined|taskType[];
  taskDelMsg:undefined|string
  constructor(private list:TasksService) { }


  ngOnInit(): void {
    this.list.listTask().subscribe((result)=>{
      this.taskList=result;
    })
  }

  deleteList(id:number){
    console.warn("ID:",id);
    this.list.deleteTask(id).subscribe((result)=>{
      if(result){
        this.taskDelMsg="Task Deleted";
        this.list.listTask().subscribe((result)=>{
          this.taskList=result;
        })
      }
    })
    
    setTimeout(() => {
      this.taskDelMsg=undefined;
    }, 3000);
  }

  changeStatus(item:taskType){
    item.active= !item.active;
    this.list.updateTask(item).subscribe((result)=>{
      if(result){
        console.warn("Status changed");    
      }
    })
  }
}
