import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';

import { TripsListPage } from '../trips-list/trips-list';

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
  criteria = {
    destinations: [],
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

    this.navCtrl.push(TripsListPage);
  }

  fetchSuggestions() {
    this.discovery.fetchSuggestions(this.destinationSearch)
      .subscribe(suggestions => {
        this.suggestions = suggestions.predictions;
        console.info('Loaded suggestions', this.suggestions);
      });
  }
}
