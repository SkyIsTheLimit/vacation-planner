import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {
  Location,
  LocationCategory
} from '../../models';

/*
  Generated class for the DataManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataManagerProvider {

  constructor(public http: Http) {
    console.log('Hello DataManagerProvider Provider');
  }

  getLocationCategories(): Promise<Array<LocationCategory>> {
    return new Promise<Array<LocationCategory>>((resolve, reject) => {
      this.http.get('assets/location-categories.csv').subscribe((data: any) => {
        console.log('Received data from location-categories.csv\n\n', data)
        resolve(this.parseCategories(data._body));
      });
    });
  }

  parseCategories(data): Array<LocationCategory> {
    let parsedObject = {},
      lines = data.split('\n'),
      currentCategory,
      locations: Array<Location>,
      locationCategories: Array<LocationCategory> = [];

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].split(',').length === 1) {
        if (lines[i].split(',')[0].trim() === '') {
          continue;
        }

        currentCategory = lines[i];
        locations = [];

        locationCategories.push({
          name: currentCategory,
          locations: locations
        });
      } else {
        let line = lines[i],
          parts = line.split(',');

        locations.push({
          name: parts[0],
          city: parts[0],
          state: parts.length === 4 ? parts[1] : '',
          continent: parts[parts.length - 1],
          country: parts[parts.length - 2],
          lat: 0,
          lon: 0
        });
      }
    }

    return locationCategories;
  }
}
