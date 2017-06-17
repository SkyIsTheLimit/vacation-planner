import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CompanionCriteria } from '../../models/companion-criteria.model'

/*
  Generated class for the TravelCompanionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TravelCompanionProvider {
 private res = "";
  constructor(public http: Http) {
    console.log('Hello TravelCompanionProvider Provider');
  }
  searchNearByRestaurants(criteria: CompanionCriteria) : string{
    console.log("Inside add method");
    console.log("location: " +  criteria.location);
    console.log("radius: " +  criteria.radius);
    console.log("type: " +  criteria.type);
    console.log("keyword: " +  criteria.keyword);
    var endpoint = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
                + 'location=' + criteria.location + 
                '&radius=' + criteria.radius +
                 '&type=' + criteria.type +
                 '&keyword=' + criteria.keyword +
                 '&key=AIzaSyC4x3E86QCk1dW2iVA5GHmRH9mNKtZx-1g';
     this.http.get(endpoint).map(response => response.json())
    .subscribe((json : Object) => this.res = json.toString());
    console.log(this.res);
    return this.res;
  }
}
