import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TripsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class TripsPage {
trips: any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.trips = "booked";
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
  }

}
