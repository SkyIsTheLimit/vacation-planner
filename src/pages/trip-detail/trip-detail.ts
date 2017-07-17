import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TripManagerProvider } from '../../providers';

/**
 * Generated class for the TripDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html',
})
export class TripDetailPage {
  trip: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public tripManager: TripManagerProvider) {
    this.trip = this.navParams.get('trip');

    // Add this trip to recently viewed.
    this.tripManager.addToRecentlyViewedTrips(this.trip);

    // Check if trip is added. For now, only match title.
    this.tripManager.myTrips.forEach((trip) => {
      if (this.trip.title === trip.title) {
        this.trip.isAddedToMyTrips = true;
      }
    });

    console.info('Added trip to recently viewed trips', this.tripManager.recentlyViewedTrips);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripDetailPage');
  }

  addToMyTrips() {
    this.tripManager.addToMyTrips(this.trip);
    this.trip.isAddedToMyTrips = true;

    console.info('Added trip to my trips', this.tripManager.myTrips);
  }

}
