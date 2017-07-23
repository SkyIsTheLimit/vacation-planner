import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';

import {
  BookkeeperPage,
  TripListPage,
  SearchCriteriaPage,
  LocationPreferenceListPage
} from '../../pages';
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
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next() {
    this.navCtrl.push(LocationPreferenceListPage, {
      category: {
        name: this.category
      }
    });
  }

  skipDiscovery() {
    this.navCtrl.push(SearchCriteriaPage);
  }
}
