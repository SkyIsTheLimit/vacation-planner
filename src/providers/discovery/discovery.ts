import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DiscoveryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DiscoveryProvider {

  constructor(public http: Http) {
    console.log('Hello DiscoveryProvider Provider');
  }

  getTrips() {
    return this.http.get('http://api.mytrips.com/trips')
      .map(res => res.json().data);
  }

  fetchSuggestions(input) {
    var api = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyA0XvKwTnb3YkJjQqoY0iQA3ybkhLZJmro&&input=' + input;

    return this.http.get(api)
      .map(res => res.json());
  }

  loadRestaurants() {
    return [{
      id: 1,
      name: 'Abc'
    }, {
      id: 2,
      name: 'Xyz'
    }];
  }

}
