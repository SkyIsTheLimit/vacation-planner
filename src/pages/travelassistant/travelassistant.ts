import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TravelCompanionProvider } from '../../providers';
import { CompanionCriteria } from '../../models/companion-criteria.model';
import { TravelcompaniondetailPage } from '../travelcompaniondetail/travelcompaniondetail';

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
  distances: Array<any> = [];
  calculateddistance: Array<any> = [];
  details: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private tc: TravelCompanionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelassistantPage');
    //this.restaurants = this.navParams.data;
    this.loadNearbyPlaces(this.navParams.data);
  }

  loadNearbyPlaces(criteria) {
    //this.navParams.get("resulttype");
    // let criteria: criteria;
    console.log("name:" + criteria.type);

    this.tc.searchNearByRestaurants(criteria).subscribe(res => this.restaurants = res.results);
    console.log("fetching distance");
    console.log("result length:" + this.restaurants.length);
    //let i = 0;
    /*  for (var i = 0; i < 5; i++) {
        console.log("fetching distance inside method");
        let entry = this.restaurants[i];
        let criteria1: CompanionCriteria = {
        type: "",
        keyword: "",
        filter: "",
        location: criteria.location,
        radius: entry.geometry.location.lat + "," + entry.geometry.location.lng
      };
        console.log(entry); 
        this.tc.getdistanceForCoords(criteria1).subscribe(res => this.distances = res.rows);
        entry.scope = "hello"; //this.distances[0].rows[0].elements[0].distance.text;
        this.calculateddistance.push(entry);
        console.log(entry);
        i++;
      }
      this.restaurants = this.calculateddistance;*/
  }
  loadItemDetails(restaurant) {
    console.log(restaurant.name);
    this.tc.getPlaceDetails(restaurant.place_id).subscribe(res => {
      setTimeout(() => { this.details = res }, 500)
    });
    setTimeout(() => this.navCtrl.push(TravelcompaniondetailPage, this.details), 2000);
  }
}
