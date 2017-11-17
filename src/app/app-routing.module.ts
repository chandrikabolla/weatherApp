import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{CityDetailComponent} from './city-detail/city-detail.component';
const routes:Routes=[
			{path:'cities',component:CitiesComponent},
			{path:'dashboard',component:DashboardComponent},
			{path:'',redirectTo:'/dashboard',pathMatch:'full'},
			{path:'detail/:name',component:CityDetailComponent}
	];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
	
}
