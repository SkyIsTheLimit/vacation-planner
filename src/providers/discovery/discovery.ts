import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Airport } from '../../models/airport';
import { ApiManagerProvider } from '../api-manager/api-manager';

/*
  Generated class for the DiscoveryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DiscoveryProvider {
  airports: Array<any>;

  constructor(public http: Http, public apiManager: ApiManagerProvider) {
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

  fetchSuggestions(input, n) {
    return new Promise<any>((resolve, reject) => {
      if (!this.airports) {
        this.apiManager.loadAirports().subscribe(airports => {
          this.airports = airports;
          console.info('Airports', this.airports);
          resolve({
            predictions: airports.filter(function (airport: Airport) {
              return airport.city.indexOf(input) !== -1 ||
                airport.airportname.indexOf(input) !== -1 ||
                airport.code.indexOf(input) !== -1 ||
                airport.country.indexOf(input) !== -1;
            }).splice(0, n)
          });
        }, error => reject(error));
      } else {
        resolve({
          predictions: this.airports.filter(function (airport) {
            return airport.city.indexOf(input) !== -1 ||
              airport.airportname.indexOf(input) !== -1 ||
              airport.code.indexOf(input) !== -1 ||
              airport.country.indexOf(input) !== -1;
          }).splice(0, n)
        });
      }
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
