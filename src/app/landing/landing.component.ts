import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { LandingService } from '../services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  authStatus: boolean = false;

  constructor(private lservice: LandingService,
    private router: Router) { }

  restaurants: Restaurant;
  data: any[] = [];
  lat = 32.844500;
  lng = -5.827832;
  zoom = 5;

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.lservice.getRestaurants()
      .subscribe((data: any) => {
        this.restaurants = data;
        this.data = data;
      });
  }

  onSearchKey(event: any) {
    const input = event.target.value;
    this.data = [];
    for (var i = 0, l = this.restaurants.length; i < l; i++) {
      if ((this.restaurants[i].name).includes(input) || 
      (this.restaurants[i].address).includes(input) || 
      (this.restaurants[i].description).includes(input) ||
      (this.restaurants[i].date).includes(input)) {
        this.data.push(this.restaurants[i]);
      }
    }
  }

  showRestaurent(id: number){
    this.router.navigate(['/restaurant', id]);
  }

}
