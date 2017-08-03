import { Component } from '@angular/core';
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
  // trips: Array<any>;
  trips: any = {
    list: []
  };
  criteria: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,
    public fm: FlightManagerProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    this.criteria = this.navParams.get("criteria");
    console.log("search criteria in trip list");
    console.log(this.criteria);
    // fm.fetchMatchingFlights(this.criteria);
    // this.trips = fm.manageReturnedTrips();

    let spinner = this.loadingCtrl.create({
      content: 'Loading Trips',
      dismissOnPageChange: true,
      duration: 2000
    });

    spinner.present();

    fm.manageReturnedTrips().then(trips => {
      this.trips = trips;

      spinner.dismiss();
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TripListPage');
  }

  viewHotelsList(trip) {
    this.app.getRootNav().push(HotelListPage, {
      trip: trip
    });
    // console.log(event.target.tagName);== IMG/ DIV
  }

  viewFlightDetails(flight) {
    let flightDetailsModal = this.modalCtrl.create(FlightDetailModalPage, {
      flight: flight
    });
    flightDetailsModal.present();
    // this.app.getRootNav().push(FlightDetailModalPage, {
    //   flight: flight
    // });
  }
}
