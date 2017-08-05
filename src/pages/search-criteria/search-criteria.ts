import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';
import { BookkeeperPage } from '../bookkeeper/bookkeeper';
import { TripListPage } from '../trip-list/trip-list';
import { TripDetailPage } from '../trip-detail/trip-detail';
import { TripComparisonPage } from '../trip-comparison/trip-comparison';

import { Airport } from '../../models';

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
  noOfRooms: Array<number>;
  noOfGuests: Array<number>;
  budgetLimit: {};
  criteria = {
    'origin': {
      airportCode: "",
      city: "",
      country: ""
    },
    'destination': {
      airportCode: "",
      city: "",
      country: ""
    },
    startDate: {},
    endDate: {},
    budgetLimit: 100000,
    hotelInformation: {
      numberOfGuests: 2,
      numberOfRooms: 1,
      ratings: []
    }
  };
  startDate = '';
  endDate = '';
  starRating: Array<boolean>;
  five: boolean = false;
  spinner: any;
  spinnerThis: any;
  destinationSearch: any;
  originSuggestions: Array<any> = [];
  destinationSuggestions: Array<any> = [];
  selectedOrigin = '';
  selectedDestination = '';
  previouslySelectedDestination: Airport = null;

  getDate(date = new Date()) {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search Criteria');
  }

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    private discovery: DiscoveryProvider) {
    this.startDate = this.getDate(new Date());
    this.endDate = this.getDate(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)));
    this.starRating = [false, false, false, false, false];
    this.budgetLimit = {
      'lower': 100000,
      'upper': 400000
    };
    this.noOfRooms = [];
    this.noOfGuests = [];
    this.incrementToTen(this.noOfRooms);
    this.incrementToTen(this.noOfGuests);

    this.previouslySelectedDestination = this.navParams.get('destination');

    if (this.previouslySelectedDestination) {
      var d = this.previouslySelectedDestination;
      this.selectedDestination = d.city + '(' + d.code + ') - ' + d.airportname;
      this.criteria.destination = {
        airportCode: d.code,
        city: d.city,
        country: d.country
      }
    }
  }

  incrementToTen(variable) {
    console.log("variable");
    console.log(variable);
    for (var i = 1; i <= 10; i++) {
      variable.push(i);
    }
  }

  setOrigin(origin) {
    this.criteria.origin.city = origin.city;
    this.criteria.origin.airportCode = origin.code;
    this.criteria.origin.country = origin.country;
    this.selectedOrigin = origin.city + '(' + origin.code + ') - ' + origin.airportname;
    this.originSuggestions = [];
  }

  setDestination(destination) {
    this.criteria.destination.city = destination.city;
    this.criteria.destination.airportCode = destination.code;
    this.criteria.destination.country = destination.country;
    // this.criteria.destination = destination;
    this.selectedDestination = destination.city + '(' + destination.code + ') - ' + destination.airportname;
    this.destinationSuggestions = [];
  }

  addDestination(destination, type, $event) {
    console.debug('Adding destination', destination, $event);
    this.criteria[type] = destination.description;
    this.originSuggestions = [];
    this.destinationSuggestions = [];
  }

  find() {
    console.debug('Searching for trips', this.criteria);

    this.spinner = this.loadingCtrl.create({
      content: 'Loading Trips',
      dismissOnPageChange: true,
      duration: 2000
    }).present();
    this.spinnerThis = this;

    // this.navCtrl.push(TripListPage);
  }

  fetchSuggestions(query, type) {
    this.discovery.fetchSuggestions(query, 10)
      .then(suggestions => {
        this[type + 'Suggestions'] = suggestions.predictions;
        console.info('Loaded suggestions', this[type + 'Suggestions']);
      });
  }

  /**
   * Method called when the user wants to perform the search for the entered criteria
   * This internally will trigger an API request to fetch relevant flights and hotels 
   * and display them
   */
  discoverTrip() {
    // this.find();
    // this.criteria.budgetLimit = this.budgetLimit.upper;
    this.criteria.startDate = new Date("" + this.startDate).getTime();
    this.criteria.endDate = new Date("" + this.endDate).getTime();
    // setTimeout(() => {
    //   console.log("timeout over >>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    //   this.spinner.dismiss();
    // }, 5000);

    // this.navCtrl.push(TripDetailPage);
    // this.navCtrl.push(TripComparisonPage);

    this.navCtrl.push(TripListPage, {
      criteria: this.criteria,
      spinner: this.spinner,
      spinnerThis: this.spinnerThis
    });
  }

  /**
   * Function called when the user clicks on a star rating as part of trip search criteria
   * the star rating limits the hotel searches to only the selected star ratings
   */
  addSelectedRating(rating, ratingString) {
    let index = this.criteria.hotelInformation.ratings.indexOf(rating);
    if (index >= 0) {
      //already exists, need to remove
      this.starRating[rating - 1] = false;
      this.criteria.hotelInformation.ratings.splice(index, 1);
    } else {
      //does not exist, need to add
      this.criteria.hotelInformation.ratings.push(rating);
      this.starRating[rating - 1] = true;
    }
    console.log(this.starRating);
  }

  /**
   * button called when user selects a star rating button
   */
  isButtonSelected(rating) {
    let index = this.criteria.hotelInformation.ratings.indexOf(rating);
    if (index >= 0) {
      console.log("returning true for " + rating + " " + index);
      return true;
    }
  }

  toggle() {
    this.five = !this.five;
  }
}
