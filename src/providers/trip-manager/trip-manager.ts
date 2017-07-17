import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Trip } from '../../models/trip';

/*
  Generated class for the TripManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TripManagerProvider {
  myTrips: Array<Trip> = [];
  bookmarkedTrips: Array<Trip> = [];
  recentlyViewedTrips: Array<Trip> = [];

  constructor(public http: Http) {
    console.log('Hello TripManagerProvider Provider');
  }

  addToMyTrips(trip) {
    this.myTrips.push(trip);
  }

  addToBookmarkedTrips(trip) {
    this.bookmarkedTrips.push(trip);
  }

  addToRecentlyViewedTrips(trip) {
    this.recentlyViewedTrips.push(trip);

    if (this.recentlyViewedTrips.length > 20) {
      this.recentlyViewedTrips = this.recentlyViewedTrips.reverse();
      this.recentlyViewedTrips.pop();
      this.recentlyViewedTrips = this.recentlyViewedTrips.reverse();
    }
  }
}