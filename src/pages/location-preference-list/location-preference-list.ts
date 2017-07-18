import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OriginPickerPage } from '../../pages';

/**
 * Generated class for the LocationPreferenceListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-location-preference-list',
  templateUrl: 'location-preference-list.html',
})
export class LocationPreferenceListPage {
  category: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = this.navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPreferenceListPage');
  }

  next() {
    this.navCtrl.push(OriginPickerPage);
  }
}
