import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  // DiscoveryProvider,
  DataManagerProvider
} from '../../providers';

import {
  // BookkeeperPage,
  // TripListPage,
  SearchCriteriaPage,
  LocationPreferenceListPage
} from '../../pages';

import { LocationCategory } from '../../models';
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
  category: LocationCategory;
  categories: Array<LocationCategory>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataManager: DataManagerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoveryPage');

    console.log('Loading Data');
    this.dataManager.getLocationCategories().then(categories => {
      console.log('Received categories', categories);
      this.categories = categories;
    });
  }

  next() {
    this.navCtrl.push(LocationPreferenceListPage, {
      category: this.category
    });
  }

  skipDiscovery() {
    this.navCtrl.push(SearchCriteriaPage);
  }
}
