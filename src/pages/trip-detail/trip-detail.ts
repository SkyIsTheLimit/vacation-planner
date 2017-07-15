import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trip = this.navParams.get('trip');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripDetailPage');
  }

}
