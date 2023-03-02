import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';

import { authGuard } from '../auth/auth.guard';
import { LoginComponent } from '../pages/auth/login/login.component';
import {RegisterComponent} from '../pages/auth/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: {title: 'Login', animation: 'login'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register', animation: 'register'}},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
