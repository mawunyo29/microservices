import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from '../pages/home/home/home.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

const routes: Routes = [

  { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule), canLoad: [authGuard] },
  {path: 'admin', component: AdminComponent, canActivate: [authGuard],
   children: [
    {path: '',
    children:[
      {path: 'dashboard-admin', component: AdminDashboardComponent},
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
