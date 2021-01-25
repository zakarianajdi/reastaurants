import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LandingService {
    constructor(private http: HttpClient) { }

    configUrl = 'http://localhost:8000/';

    getRestaurants() {
        return this.http.get(this.configUrl+'restaurants');
    }

    getRestaurantById(id: number) {
        return this.http.get(this.configUrl + 'restaurant/' + id);
    }
}