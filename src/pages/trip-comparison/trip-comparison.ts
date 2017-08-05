import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TripComparisonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trip-comparison',
  templateUrl: 'trip-comparison.html',
})
export class TripComparisonPage {
  trip1: any;
  trip2: any;

  exampleTrip1 = {
    cost: 1000000,
    hotel: {
      name: 'Hotel 1',
      price: 10000
    }
  };

  exampleTrip2 = {
    cost: 2000000,
    hotel: {
      name: 'Another Hotel',
      price: 20000
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trip1 = this.navParams.get('trip1') || this.exampleTrip1;
    this.trip2 = this.navParams.get('trip2') || this.exampleTrip2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripComparisonPage');
  }

}
