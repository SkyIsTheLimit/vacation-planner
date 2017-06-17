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

  constructor() {//public http: Http) {
    console.log('Hello DiscoveryProvider Provider');
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
