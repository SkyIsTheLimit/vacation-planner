import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { TravelCompanionProvider } from '../../providers';
import { DiscoveryProvider } from '../../providers';

import { Restaurant } from '../../models/restaurant';
import { TravelassistantPage } from '../travelassistant/travelassistant';
import { CompanionCriteria } from '../../models/companion-criteria.model';
// import { GoogleMap, GoogleMapsEvent, GoogleMaps, LatLng } from '@ionic-native/google-maps';
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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private tc: TravelCompanionProvider,
    private discovery: DiscoveryProvider,
    public platform: Platform) {
    this.tc.getNearbyPlaces('12.9716,77.5946', 10000, 'food', '').map(res => res.json()).subscribe(value => {
      console.info('Received info', value);
    }, error => console.error(error));
  }
  // map: GoogleMap;
  loadMap() {

    // let location = new LatLng(-34.9290,138.6010);

    /* this.map = new GoogleMap('map', {
       'backgroundColor': 'white',
       'controls': {
         'compass': true,
         'myLocationButton': true,
         'indoorPicker': true,
         'zoom': true
       },
       'gestures': {
         'scroll': true,
         'tilt': true,
         'rotate': true,
         'zoom': true
       },
       'camera': {
         'latLng': location,
         'tilt': 30,
         'zoom': 15,
         'bearing': 50
       }
     });*/
    //   this.map = new GoogleMap('map');
    //  // this.map.setVisible(true);
    //   this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
    //       console.log('Map is ready!');
    //   });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelassistantPage');
  }
  radius: any = "";
  cuisine: any = "";
  criteria = {
    destinations: [],
    startDate: {},
    endDate: {}
  };
  originSuggestions: Array<any> = [];
  location: string = "";
  coordinates: Array<any> = [];
  fetchSuggestions(query, type) {
    // this.discovery.fetchSuggestions(query)
    //   .subscribe(suggestions => {
    //     this[type + 'Suggestions'] = suggestions.predictions;
    //     console.info('Loaded suggestions', this[type + 'Suggestions']);
    //   });
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
    let criteria1: CompanionCriteria = {
      type: resulttype,
      keyword: "",
      filter: "",
      location: this.location,
      radius: this.radius
    };
    console.log("radius:" + this.radius);
    console.log("cuisine:" + this.cuisine);
    this.tc.getLocationCoordsForCity(criteria1).subscribe(res => this.coordinates = res.results);
    let criteria: CompanionCriteria = {
      type: resulttype,
      keyword: this.cuisine,
      filter: "",
      location: this.coordinates[0].geometry.location.lat + "," + this.coordinates[0].geometry.location.lng,
      radius: this.radius
    };
    if (resulttype == 'airport') {
      criteria.radius = "30000";
    }

    console.log("result type" + resulttype);
    this.navCtrl.push(TravelassistantPage, criteria);
  }

}
