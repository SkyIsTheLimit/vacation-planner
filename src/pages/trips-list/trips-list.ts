import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TripsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trips-list',
  templateUrl: 'trips-list.html',
})
export class TripsListPage {
  trips: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trips = [{
      title: 'Trip 1'
    }, {
      title: 'Another Trip'
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsListPage');
  }

}
