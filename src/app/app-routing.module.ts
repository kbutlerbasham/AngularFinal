import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateFormComponent } from '../app/create-form/create-form.component';
import { TasksComponent } from '../app/tasks/tasks.component';
import { CreateNewComponent } from './create-new/create-new.component';

const routes: Routes = [
  {
      path: 'description',
      component: CreateFormComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
},
{
    path: 'home',
    component: CreateNewComponent
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

