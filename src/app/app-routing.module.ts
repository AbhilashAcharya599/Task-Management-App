import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  {
    path:"",
    component:TaskListComponent
  },
  {
    path:"create-task",
    component:CreateTaskComponent
  },
  {
    path:"edit-task/:id",
    component:EditTaskComponent
  },
  {
    path:"task-details/:taskId",
    component:TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
