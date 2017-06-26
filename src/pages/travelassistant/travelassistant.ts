import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TravelCompanionProvider } from '../../providers';

import { Restaurant } from '../../models/restaurant';
/**
 * Generated class for the TravelassistantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travelassistant',
  templateUrl: 'travelassistant.html',
})
export class TravelassistantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tc: TravelCompanionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelassistantPage');
    this.loadNearbyPlaces();
  }

  loadNearbyPlaces() {
  }

}
