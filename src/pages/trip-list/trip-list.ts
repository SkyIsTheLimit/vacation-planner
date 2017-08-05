import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams, App, ModalController, LoadingController } from 'ionic-angular';

import { TripDetailPage } from '../trip-detail/trip-detail';
import { FlightDetailModalPage } from '../flight-detail-modal/flight-detail-modal';
import { FlightManagerProvider } from '../../providers/flight-manager/flight-manager';
import { HotelListPage } from '../hotel-list/hotel-list';

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
  tripsMasterList: Array<object> = [];
  trips: Array<object> = [];
  criteria: any;
  batchSize: number = 10;
  startIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,
    public fm: FlightManagerProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    this.criteria = this.navParams.get("criteria");
    console.log("search criteria in trip list");
    console.log(this.criteria);
    fm.fetchMatchingFlights(this.criteria)
      .map((res: any) => {
        return res.json();
      })
      .subscribe((data: any) => {
        console.info('Data Received', data);
        // data = JSON.parse(data._body);
        var tripsList = {
          data: {},
          tripOption: {}
        };
        var finalList;
        console.log("Here is your response");
        console.log(data);
        // if(data.tripOptions){
        // var tripList = JSON.parse(data.data);
        let tripList = data.data;
        tripList.data = data.data;
        tripList.tripOption = data.tripOption;
        // tripsList.data = JSON.parse(data.data);
        tripsList.data = data.data;
        tripsList.tripOption = data.tripOption;
        // tripsList.tripOption = JSON.parse(data.tripOptions);
        this.tripsMasterList = fm.manageReturnedTrips(tripsList);
        this.setFlightsList();
        // } else{
        //   this.tripsMasterList  = [];
        // }
      }, (err) => {
        console.log("Looks like something has gone wrong");
        console.log(err);
        this.tripsMasterList = [];
      });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TripListPage');
  }

  viewHotelsList(flight) {
    this.criteria.budgetLimit = this.criteria.budgetLimit - parseInt(flight.totalPrice.substring(3));
    this.app.getRootNav().push(HotelListPage, {
      flight: flight,
      criteria: this.criteria
    });
    // console.log(event.target.tagName);== IMG/ DIV
  }

  viewFlightDetails(flight) {
    let flightDetailsModal = this.modalCtrl.create(FlightDetailModalPage, {
      flight: flight,
      criteria: this.criteria
    });
    flightDetailsModal.present();
    // this.app.getRootNav().push(FlightDetailModalPage, {
    //   flight: flight
    // });
  }

  shouldLoadMore() {
    return (this.startIndex < this.tripsMasterList.length);
  }

  /**
   * Method called as an extension of the constructor
   * This method picks the first few matching hotels and pushes them to the UI linked array.
   */
  setFlightsList() {
    let initialValue = this.startIndex;
    if (this.batchSize < (this.tripsMasterList.length - this.startIndex)) {
      for (this.startIndex; this.startIndex < (this.batchSize + initialValue); this.startIndex++) {
        this.trips.push(this.tripsMasterList[this.startIndex]);
      }
    } else {
      for (this.startIndex; this.startIndex < this.tripsMasterList.length; this.startIndex++) {
        this.trips.push(this.tripsMasterList[this.startIndex]);
      }
    }
    //set the start index for the next iteration
    this.startIndex++;
  };
}
