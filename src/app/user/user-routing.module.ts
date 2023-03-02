import { animation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailComponent } from '../pages/users/user-detail/user-detail.component';
const routes: Routes = [
  {path: 'users', redirectTo: '/all-users'},
  {path: 'users/:id', component: UserDetailComponent, data: {title: 'User Details', animation: 'user'}},
  {path: 'all-users', component: UserListComponent ,data: {title: 'All Users', animation: 'users'} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
