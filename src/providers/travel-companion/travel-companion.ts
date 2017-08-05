import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CompanionCriteria } from '../../models/companion-criteria.model'

import { ApiManagerProvider } from '../api-manager/api-manager';

/*
  Generated class for the TravelCompanionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TravelCompanionProvider {
  private location = "";
  resjson: Array<any> = [];
  constructor(public http: Http) {
    let that = this;
    console.log('Hello TravelCompanionProvider Provider');
    navigator.geolocation.getCurrentPosition(function(position) {
            
            var pos = {
              lat: position.coords.latitude, 
              lng: position.coords.longitude
            };
            that.location = pos.lat + "," + pos.lng;
            //console.log("lattitude:" + location.lat);
            //this.res = location.lat + "," + pos.lng;
          });
          console.log("lattitude:" + this.location);
  }
  searchNearByRestaurants(criteria: CompanionCriteria) {
    console.log("Inside add method");
    console.log("criteria location: " + criteria.location);
    console.log("radius: " + criteria.radius);
    console.log("type: " + criteria.type);
    console.log("location:" + this.location);
    var endpoint = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=' + criteria.location +
      '&radius=' + criteria.radius +
      '&type=' + criteria.type +
      '&keyword=' + criteria.keyword +
      '&key=AIzaSyC4x3E86QCk1dW2iVA5GHmRH9mNKtZx-1g';

    return this.http.get(endpoint).map(response => response.json())
    // .then((json : Object) => this.res = json.toString());
    // console.log(this.res);
    // return this.res;
  }
  getLocationCoordsForCity(criteria:CompanionCriteria)
  {
    var endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?'+
         'address=' + criteria.location + 
     /* + 'location=' + this.location +
      '&radius=' + criteria.radius +
      '&type=' + criteria.type +
      '&keyword=' + criteria.keyword +*/
      '&key=AIzaSyAfmZS0HL2gy02bHOco0sDhmG7dpMBaflA';
        return this.http.get(endpoint).map(response => response.json())
  }
  getdistanceForCoords(criteria:CompanionCriteria )
  {
    var endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&'+
         'origins=' + criteria.location + "|" + criteria.radius +
      '&destinations=' + criteria.radius + "|" + criteria.location
      '&key=AIzaSyAfmZS0HL2gy02bHOco0sDhmG7dpMBaflA';
        return this.http.get(endpoint).map(response => response.json())
  }
  getPlaceDetails(criteria:String)
  {
    console.log("place id:" + criteria);
    var endpoint = 'https://maps.googleapis.com/maps/api/place/details/json?' + 
    'placeid=' + criteria + '&key=AIzaSyC4x3E86QCk1dW2iVA5GHmRH9mNKtZx-1g';
    return this.http.get(endpoint).map(response => response.json());
  }

  fetchSuggestions(input) {
    var api = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyA0XvKwTnb3YkJjQqoY0iQA3ybkhLZJmro&&input=' + input;
     return this.http.get(api).map(res => res.json());
    }
}
