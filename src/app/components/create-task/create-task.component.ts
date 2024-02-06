import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/Services/tasks.service';
import { taskType } from 'src/app/taskDataType';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskAddMsg:undefined|string;
  minDate?:string
  constructor(private tasks:TasksService) { 
    const today=new Date();
    this.minDate=today.toISOString().split('T')[0]
  }

  ngOnInit(): void {
  }

  taskCreate(data:taskType){
    data.active=true;
    this.tasks.taskCreate(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.taskAddMsg="Task Added Successfully";
      }
      setTimeout(() => {
        this.taskAddMsg=undefined;
      }, 3000);
    })
  }
}
