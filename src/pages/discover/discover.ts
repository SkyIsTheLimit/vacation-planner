import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';

import { DispatchPage } from '../';

import { DiscoveryProvider } from '../../providers/discovery/discovery';

/**
 * Generated class for the DiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  restaurants: Array<any>;
  desinations: Array<any>;
  destinationSearch: any;

  profile: any = {
    isLoggedIn: false
  };

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private discovery: DiscoveryProvider) {
  }

  addDestination() {
    console.debug('Adding destination', this.destinationSearch);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverPage');
  }
}
