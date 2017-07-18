import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';
import { BookkeeperPage } from '../bookkeeper/bookkeeper';
import { TripListPage } from '../trip-list/trip-list';
/**
 * Generated class for the DiscoveryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage {
  restaurants: Array<any>;
  singleValue: Object;
  noOfRooms: Array<number>;
  noOfGuests: Array<number>;
  selectedRooms: any;
  selectedGuests: any;
  criteria = {
    destinations: [],
    startDate: {},
    endDate: {}
  };
  destinationSearch: any;
  suggestions: Array<any> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoveryPage');
  }

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    private discovery: DiscoveryProvider) {
    this.singleValue = {
      'lower': 100000,
      'upper': 350000
    };
    this.noOfRooms = [];
    this.noOfGuests = [];
    this.incrementToTen(this.noOfRooms);
    this.incrementToTen(this.noOfGuests);
  }

  incrementToTen(variable) {
    console.log("variable");
    console.log(variable);
    for (var i = 1; i <= 10; i++) {
      variable.push(i);
    }
  }

  addDestination(destination, $event) {
    console.debug('Adding destination', destination, $event);
    this.criteria.destinations.push(destination);
    this.destinationSearch = '';
    this.suggestions = [];
  }

  removeDestination(destination, $index) {
    this.criteria.destinations.splice($index, 1);
  }

  find() {
    console.debug('Searching for trips', this.criteria);

    this.loadingCtrl.create({
      content: 'Loading Trips',
      dismissOnPageChange: true,
      duration: 2000
    }).present();

    this.navCtrl.push(TripListPage);
  }

  fetchSuggestions() {
    this.discovery.fetchSuggestions(this.destinationSearch)
      .subscribe(suggestions => {
        this.suggestions = suggestions.predictions;
        console.info('Loaded suggestions', this.suggestions);
      });
  }

  discoverTrip() {
    this.navCtrl.push(TripListPage, {
      criteria: this.criteria
    });
  }
}
