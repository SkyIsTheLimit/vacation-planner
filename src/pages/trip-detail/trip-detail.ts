import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TripManagerProvider, TravelCompanionProvider } from '../../providers';

import { TravelcompanionPage } from '../../pages';

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
  trip: any = {};
  exampleTrip = {
    destination: {
      lat: 12.5716,
      lon: 77.5486
    },
    flight: {
      startDate: new Date(),
      endDate: new Date()
    },
    hotel: {
      name: 'Mariott',
      location: 'Indiranagar',
      city: 'Bangalore'
    }
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public tripManager: TripManagerProvider, public tc: TravelCompanionProvider) {
    this.trip = this.navParams.get('trip') || this.exampleTrip;

    // Add this trip to recently viewed.
    this.tripManager.addToRecentlyViewedTrips(this.trip);

    // Check if trip is added. For now, only match title.
    this.tripManager.myTrips.forEach((trip) => {
      if (this.trip.title === trip.title) {
        this.trip.isAddedToMyTrips = true;
      }
    });

    this.tc.getNearbyPlaces(
      this.trip.destination.lat + ',' + this.trip.destination.lon, // location = Lat,Lon
      10000, // Radius
      '', // Types
      '') // Name
      .map(res => res.json())
      .subscribe(data => {
        console.info('Received nearby places', data);

        this.trip.nearbyPlaces = data.results;
      });

    console.info('Added trip to recently viewed trips', this.tripManager.recentlyViewedTrips);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripDetailPage');
  }

  moveToTravelCompanion() {
    console.info('Tabs', this.navCtrl);
    this.navCtrl.push(TravelcompanionPage);
  }

  addToMyTrips() {
    this.tripManager.addToMyTrips(this.trip);
    this.trip.isAddedToMyTrips = true;

    console.info('Added trip to my trips', this.tripManager.myTrips);
  }

}
