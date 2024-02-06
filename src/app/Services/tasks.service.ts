import { Injectable } from '@angular/core';
import { taskType } from '../taskDataType';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  constructor(private http:HttpClient) { }

  taskCreate(data:taskType){
    return this.http.post('http://localhost:3000/tasks',data);   
  }

  listTask(){
    return this.http.get<taskType[]>('http://localhost:3000/tasks');
  }

  deleteTask(id:number){
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }

  getTask(id:string){
    return this.http.get<taskType>(`http://localhost:3000/tasks/${id}`);
  }

  updateTask(task:taskType){
    return this.http.put<taskType>(`http://localhost:3000/tasks/${task.id}`,task);
  }
}
