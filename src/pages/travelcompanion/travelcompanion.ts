import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { TravelCompanionProvider } from '../../providers';
import { DiscoveryProvider } from '../../providers';

import { Restaurant } from '../../models/restaurant';
import { TravelassistantPage } from '../travelassistant/travelassistant';
import { CompanionCriteria } from '../../models/companion-criteria.model';
import { GoogleMap, GoogleMapsEvent, GoogleMaps, LatLng } from '@ionic-native/google-maps';
/**
 * Generated class for the TravelassistantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travelcompanion',
  templateUrl: 'travelcompanion.html',
})
export class TravelcompanionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tc: TravelCompanionProvider, private discovery: DiscoveryProvider, public platform: Platform) {
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelassistantPage');
  }
radius: any = "";
radiusinmiles : any = "";
cuisine: any = "";
 restaurants: Array<any> = [];
criteria = {
    destinations: [],
    startDate: {},
    endDate: {}
  };
originSuggestions: Array<any> = [];
location: string = "";
locationcoords: string ="";
coordinates: Array<any> = [];
fetchSuggestions(query, type) {
    this.discovery.fetchSuggestions2(query)
      .subscribe(suggestions => {
        this[type + 'Suggestions'] = suggestions.predictions;
        console.info('Loaded suggestions', this[type + 'Suggestions']);
      });
  }
addDestination(destination, type, $event) {
    console.debug('Adding destination', destination, $event);
    this.criteria[type] = destination.description;
    this.originSuggestions = [];
    this.location = destination.description;
    //this.destinationSuggestions = [];
  }

loadNearbyPlaces(resulttype) {
 this.radiusinmiles = (this.radius * 1609.34);
 let criteria1: CompanionCriteria = {
      type: resulttype,
      keyword: "",
      filter: "",
      location: this.location,
      radius: this.radiusinmiles
    };
  console.log("radius:" + this.radius);
  console.log("cuisine:" + this.cuisine);
 
  this.tc.getLocationCoordsForCity(criteria1).subscribe(res => setTimeout(() => this.coordinates = res.results, 1000));
   this.locationcoords = this.coordinates[0].geometry.location.lat + ","  + this.coordinates[0].geometry.location.lng;
   let criteria: CompanionCriteria = {
      type: resulttype,
      keyword: this.cuisine,
      filter: "",
      location: this.locationcoords,//this.coordinates[0].geometry.location.lat + ","  + this.coordinates[0].geometry.location.lng,
      radius: this.radiusinmiles
    };
    if(resulttype=='airport')
    {
      criteria.radius = "30000";
    }

   console.log("result type"  + resulttype);
   this.tc.searchNearByRestaurants(criteria).subscribe( res => this.restaurants = res.results);
   // this.navCtrl.push(TravelassistantPage,criteria); 
   setTimeout(() =>this.navCtrl.push(TravelassistantPage, this.restaurants), 1000);
  }

}
