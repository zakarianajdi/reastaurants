import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  restaurants: Restaurant;
  
  constructor(private lservice: LandingService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.lservice.getRestaurants()
      .subscribe((data: any) => {
        this.restaurants = data;
      });
  }

}
