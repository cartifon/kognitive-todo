import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { LoginComponent } from './user/login/login.component';
import { OwnerListComponent } from './tasks/owner-list/owner-list.component';
import { TaskOutletComponent } from './tasks/task-outlet/task-outlet.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tasks',
    component: TaskOutletComponent,
    children: [
      {
        path: 'tasks-list',
        component: TaskListComponent
      },
      {
        path: 'owner-list',
        component: OwnerListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
