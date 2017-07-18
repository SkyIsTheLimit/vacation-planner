import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';
import { BookkeeperPage } from '../bookkeeper/bookkeeper';
import { TripListPage } from '../trip-list/trip-list';

/**
 * Generated class for the SearchCriteriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-criteria',
  templateUrl: 'search-criteria.html',
})
export class SearchCriteriaPage {
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
  originSuggestions: Array<any> = [];
  destinationSuggestions: Array<any> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search Criteria');
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

    // this.suggestions = [{
    //   description: 'Suggestion 1'
    // }, {
    //   description: 'Delhi'
    // }, {
    //   description: 'London'
    // }];
  }

  incrementToTen(variable) {
    console.log("variable");
    console.log(variable);
    for (var i = 1; i <= 10; i++) {
      variable.push(i);
    }
  }

  addDestination(destination, type, $event) {
    console.debug('Adding destination', destination, $event);
    this.criteria[type] = destination.description;
    this.originSuggestions = [];
    this.destinationSuggestions = [];
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

  fetchSuggestions(query, type) {
    this.discovery.fetchSuggestions(query)
      .subscribe(suggestions => {
        this[type + 'Suggestions'] = suggestions.predictions;
        console.info('Loaded suggestions', this[type + 'Suggestions']);
      });
  }

  discoverTrip() {
    this.navCtrl.push(TripListPage, {
      criteria: this.criteria
    });
  }
}
