import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {

    @Input() restaurants: any;
    @Input() lat: number;
    @Input() lng: number;
    @Input() zoom: number;

    data : [] = [];

    ngOnChanges(changes: SimpleChanges) {
        this.data = this.restaurants;
    }
}
