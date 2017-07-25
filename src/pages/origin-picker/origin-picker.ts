import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';

import { TripListPage } from '../../pages';

/**
 * Generated class for the OriginPickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-origin-picker',
  templateUrl: 'origin-picker.html',
})
export class OriginPickerPage {
  suggestions: any;
  origin: any;
  isOriginSet: Boolean = false;
  criteria: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public discovery: DiscoveryProvider) {
    this.criteria.budget = {
      lower: 100000,
      upper: 350000
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OriginPickerPage');
  }

  fetchSuggestions(query) {
    this.discovery.fetchSuggestions(query)
      .subscribe(suggestions => {
        this.suggestions = suggestions.predictions;
        console.info('Loaded suggestions', this.suggestions);
      });
  }

  setOrigin(origin) {
    this.criteria.origin = origin.description;
    this.isOriginSet = true;
    this.suggestions = [];
  }

  discoverTrips() {
    this.navCtrl.push(TripListPage, {
      criteria: this.criteria
    });
  }

}
