import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ListRestaurantsComponent } from './administration/list-restaurants/list-restaurants.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';

const routes: Routes = [
  { path: 'restaurants', component: LandingComponent},
  { path: 'restaurant/:id', component: SingleRestaurantComponent},
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'list-restaurants', component: ListRestaurantsComponent },
  { path: '', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
