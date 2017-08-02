import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiManagerProvider } from '../api-manager/api-manager';

/*
  Generated class for the DiscoveryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DiscoveryProvider {

  constructor(public http: Http, public apiManager: ApiManagerProvider) {
    console.log('Hello DiscoveryProvider Provider');
  }

  getTrips() {
    return this.http.get('http://api.mytrips.com/trips')
      .map(res => res.json().data);
  }

  fetchSuggestions2(input) {
    // let apiKey = 'AIzaSyA0XvKwTnb3YkJjQqoY0iQA3ybkhLZJmro';
    let apiKey = 'AIzaSyA0-prLuFz47IBMGsHiMwKrHxLJqjI65aQ';
    let api = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=' + apiKey + '&&input=' + input;

    return this.http.get(api)
      .map(res => res.json());
  }

  fetchSuggestions(input) {
    return new Promise<any>((resolve, reject) => {
      this.apiManager.loadAirports().subscribe(airports => {
        resolve({
          predictions: airports.filter(function (airport) {
            return airport.airportname.indexOf(input) !== -1;
          })
        });
      }, error => reject(error));
    });
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
