import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.trips = "booked";
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTripsPage');
  }

}
