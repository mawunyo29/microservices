import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home/home.component';



const routes: Routes = [
  {path: 'home' , component: HomeComponent, data: {title: 'Home', animation: 'home'}},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found', animation: 'pageNotFound' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
