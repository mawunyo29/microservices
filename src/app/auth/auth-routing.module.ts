import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

import { LoginComponent } from '../pages/auth/login/login.component';
import {RegisterComponent} from '../pages/auth/register/register.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: {title: 'Login', animation: 'login'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register', animation: 'register'}},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboad', animation: 'dashboard'} ,canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
