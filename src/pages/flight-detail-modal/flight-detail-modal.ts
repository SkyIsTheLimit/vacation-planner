import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';

import { HotelListPage } from '../hotel-list/hotel-list';
/**
 * Generated class for the FlightDetailModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-flight-detail-modal',
  templateUrl: 'flight-detail-modal.html',
})
export class FlightDetailModalPage {
  flight: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public app: App, public viewCtrl: ViewController) {
    //flight information fetched from 
    this.flight = this.navParams.get('flight');
  }

  ionViewDidLoad() {
    // console.log("flight");
    // console.log(this.flight);
  }

/**
 * This method is called when the user clicks on the '>' for any flight option presented
 * This enables the user to see the hotel options that match their serarch criteria. The
 * opted flight information is passed to the Hotel-list page
 */
  showHotelList() {
    this.app.getRootNav().push(HotelListPage, {
      flight: this.flight
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
