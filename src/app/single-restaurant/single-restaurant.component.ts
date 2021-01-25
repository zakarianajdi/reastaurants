import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { LandingService } from '../services/landing.service';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.css']
})
export class SingleRestaurantComponent implements OnInit {
  
  restaurant: Restaurant;
  
  constructor(private route: ActivatedRoute,
    private lservice: LandingService) { }

  ngOnInit(): void {
    this.showDetails();
  }
  showDetails() {
    //get route params
    const id = this.route.snapshot.params['id'];

    this.lservice.getRestaurantById(id)
      .subscribe((data: Restaurant) => {
        this.restaurant = data;
      });
  }
}
