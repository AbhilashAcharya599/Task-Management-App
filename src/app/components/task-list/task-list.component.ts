import { Component, OnInit } from '@angular/core';
import { taskType } from 'src/app/taskDataType';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList:undefined|taskType[];
  taskDelMsg:undefined|string
  constructor() { }


  ngOnInit(): void {
  }

  deleteList(id:number){
    
  }

  onCheckBoxClick(item:taskType){

  }
}
