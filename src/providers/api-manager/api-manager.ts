import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiManagerProvider {
  static API_HOST = 'http://192.168.43.36:8080';
  static USERS_API = ApiManagerProvider.API_HOST + '/users';
  static OAUTH_PROFILES_API = ApiManagerProvider.API_HOST + '/oauth-profiles';
  static LOGIN_API = ApiManagerProvider.API_HOST + '/users/login';
  static LINK_USER_API = ApiManagerProvider.API_HOST + '/users/:id/link/:oAuthId';
  static OAUTH_PROFILE_TO_USER_API = ApiManagerProvider.API_HOST + '/oauth-profiles/:oAuthId/user';
  static NEARBY_API = ApiManagerProvider.API_HOST + '/NearBy';

  constructor(public http: Http) {
    console.log('Hello ApiManagerProvider Provider');
  }

  static process(url, values) {
    for (let key in values) {
      url = url.replace(':' + key, values[key]);
    }

    return url;
  }

  loadAirports() {
    return this.http.get('assets/airport-codes.json')
      .map(res => {
        console.info('Mapping Airport Codes', res);
        return res.json().sort(function (a, b) {
          return (a.airportname < b.airportname ? -1 : +1)
        });
      });
  }
}
