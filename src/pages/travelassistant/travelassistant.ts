import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TravelCompanionProvider } from '../../providers';
import { CompanionCriteria } from '../../models/companion-criteria.model';

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
  restaurants: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private tc: TravelCompanionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelassistantPage');
  }

  loadNearbyPlaces() {
    let criteria: CompanionCriteria = {
      type: "restaurant",
      keyword: "",
      filter: "",
      location: "12,77",
      radius: "10000"
    };

    this.tc.searchNearByRestaurants(criteria).subscribe(res => this.restaurants = res.results);
  }

}
