import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/Services/tasks.service';
import { taskType } from 'src/app/taskDataType';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskData:undefined|taskType;
  constructor(private activeRoute:ActivatedRoute, private task:TasksService) { }

  ngOnInit(): void {
    let taskId=this.activeRoute.snapshot.paramMap.get('taskId');
    taskId && this.task.getTask(taskId).subscribe((result)=>{
      this.taskData=result;
    })
  }

}
