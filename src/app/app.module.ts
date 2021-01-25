import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { LandingService } from './services/landing.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { MapComponent } from './landing/google-map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdministrationComponent } from './administration/administration.component';
import { ListRestaurantsComponent } from './administration/list-restaurants/list-restaurants.component';
import { AddRestaurantComponent } from './administration/add-restaurant/add-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    SingleRestaurantComponent,
    ComingSoonComponent,
    LoginComponent,
    MapComponent,
    SidebarComponent,
    AdministrationComponent,
    ListRestaurantsComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY_7yOFY9T2_TCaV67xypwuEi9qNzZWX0'
    }),
    ReactiveFormsModule,
  ],
  providers: [
    LandingService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
