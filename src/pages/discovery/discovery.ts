import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers';

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
  newDestination: any = {};

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoveryPage');
  }

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    private discovery: DiscoveryProvider) {
  }

  addDestination(newDestination, $event) {
    console.debug('Adding destination', this.newDestination, $event);
    this.criteria.destinations.push(newDestination);
    this.newDestination = {};
  }

  find() {
    console.debug('Searching for trips', this.criteria);

    this.loadingCtrl.create({
      content: 'Loading Trips',
      dismissOnPageChange: true,
      duration: 2000
    }).present();
  }
}
