import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TripDetailPage } from '../trip-detail/trip-detail';

/**
 * Generated class for the TripListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trip-list',
  templateUrl: 'trip-list.html',
})
export class TripListPage {
  trips: Array<any>;
  criteria: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trips = [{
      title: 'Trip 1',
      startDate: new Date().getTime(),
      endDate: new Date().getTime()
    }, {
      title: 'Another Trip',
      startDate: new Date().getTime(),
      endDate: new Date().getTime()
    }];

    this.criteria = this.navParams.get('criteria');

    this.trips.forEach(trip => {
      trip.startDate = this.criteria.startDate;
      trip.endDate = this.criteria.endDate;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripListPage');
  }

  viewDetail(trip) {
    this.navCtrl.push(TripDetailPage, {
      trip: trip
    });
  }

}
