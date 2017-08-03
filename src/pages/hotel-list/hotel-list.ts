import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController,  } from 'ionic-angular';

import { HotelDetailModalPage } from '../hotel-detail-modal/hotel-detail-modal';
import { FlightManagerProvider } from '../../providers/flight-manager/flight-manager';
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
hotels: Array<object> = [];
hotelsMasterList :Array<object> = [];
flights: any;
batchSize: number = 10;
startIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public app: App, public modalCtrl: ModalController, public fm: FlightManagerProvider) {
    this.flights = this.navParams.get('flight');
    console.log(this.flights);
    // this.hotelsMasterList =
     fm.manageReturnedHotels(this.navParams.get('criteria'))
     .subscribe(data => {
      console.log("Here is your response");
      console.log(data);
      // var hotelList = [];
      // hotelList = 
      this.hotelsMasterList = JSON.parse(data._body);
      this.setHotelList();
      // finalObj.data = JSON.parse(data);
      // this.tripList = data;
      // return this.manageReturnedTrips(data);
    }, (err) => {
      console.log("Looks like something has gone wrong");
      console.log(err);
      this.hotelsMasterList = [];
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HotelListPage');
  }
  /**
   * Method called as an extension of the constructor
   * This method picks the first few matching hotels and pushes them to the UI linked array.
   */
  setHotelList(){
    let initialValue = this.startIndex;
    if(this.batchSize < (this.hotelsMasterList.length - this.startIndex)){
      for(this.startIndex; this.startIndex < (this.batchSize + initialValue); this.startIndex++){
        this.hotels.push(this.hotelsMasterList[this.startIndex]);
      }
    } else {
      for(this.startIndex; this.startIndex < this.hotelsMasterList.length; this.startIndex++){
        this.hotels.push(this.hotelsMasterList[this.startIndex]);
      }
    }
    //set the start index for the next iteration
    this.startIndex ++;
  };

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
