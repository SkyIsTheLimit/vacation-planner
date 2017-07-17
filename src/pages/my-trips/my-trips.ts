import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { TripManagerProvider } from '../../providers';
import { TripDetailPage } from '../../pages';
import { Trip } from '../../models/trip';

/**
 * Generated class for the MyTripsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-trips',
  templateUrl: 'my-trips.html',
})
export class MyTripsPage {
  trips: any;
  myTrips: Array<Trip> = [];
  bookmarkedTrips: Array<Trip> = [];
  recentlyViewedTrips: Array<Trip> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public tripManager: TripManagerProvider) {
    this.trips = "booked";

    this.myTrips = this.tripManager.myTrips;
    this.bookmarkedTrips = this.tripManager.bookmarkedTrips;
    this.recentlyViewedTrips = this.tripManager.recentlyViewedTrips;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTripsPage');
  }

  viewDetail(trip) {
    this.app.getRootNav().push(TripDetailPage, {
      trip: trip
    });
  }

}
