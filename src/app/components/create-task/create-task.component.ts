import { Component, OnInit } from '@angular/core';
import { taskType } from 'src/app/taskDataType';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskAddMsg:undefined|string;
  minDate?:string
  constructor() { 
    const today=new Date();
    this.minDate=today.toISOString().split('T')[0]
  }

  ngOnInit(): void {
  }

  taskCreate(data:taskType){

  }
}
