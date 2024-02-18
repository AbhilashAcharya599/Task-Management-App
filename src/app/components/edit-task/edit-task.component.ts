import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/Services/tasks.service';
import { taskType } from 'src/app/taskDataType';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskData:undefined|taskType;
  taskEditMsg:undefined|string;
  minDate?:string;
  constructor(private route:ActivatedRoute, private task:TasksService) {
    const today= new Date();
    this.minDate=today.toISOString().split('T')[0];
   }

  ngOnInit(): void {
    let taskId=this.route.snapshot.paramMap.get('id');
    taskId && this.task.getTask(taskId).subscribe((data)=>{
      this.taskData=data;
    })
  }

  submit(data:taskType){
    console.warn(data);
    if(this.taskData){
      data.id=this.taskData.id;
      data.active=this.taskData.active;
    }
    this.task.updateTask(data).subscribe((result)=>{
      if(result){
        this.taskEditMsg="Task Updated"
      }
    });
    setTimeout(() => {
      this.taskEditMsg=undefined;
    }, 3000);
  }
}
