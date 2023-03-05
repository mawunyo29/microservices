import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navigations/navbar/navbar.component';
import { FooterComponent } from './navigations/footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';

import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { HomeComponent } from './pages/home/home/home.component';

import { Router } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UserListComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    HomeComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AuthModule,
   
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
