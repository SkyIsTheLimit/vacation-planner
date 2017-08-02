import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController,  } from 'ionic-angular';

import { HotelDetailModalPage } from '../hotel-detail-modal/hotel-detail-modal';
import { TripDetailPage } from '../trip-detail/trip-detail';
/**
 * Generated class for the HotelListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hotel-list',
  templateUrl: 'hotel-list.html',
})
export class HotelListPage {
hotels: any;
flights: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public app: App, public modalCtrl: ModalController) {
    this.flights = this.navParams.get('flight');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HotelListPage');
  }
  viewHotelDetails(hotel){
    let flightDetailsModal = this.modalCtrl.create(HotelDetailModalPage, {
      hotel: hotel
    });
    flightDetailsModal.present();
  }
/**
 * This method is called when the user clicks on the '>' icon on the hotel-list page.
 * This signifies that the user has finalized on the hotel and wants to view the entire trip.
 */
  viewTripDetails(){
     this.app.getRootNav().push(TripDetailPage);
  }

}
