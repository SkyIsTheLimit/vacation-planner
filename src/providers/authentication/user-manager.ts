import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {
  User,
  OAuthProfile
} from '../../models';

import {
  AuthenticationProvider,
  DemoAuthenticationProvider,
  RestAuthenticationProvider
} from './providers';

import { ApiManagerProvider } from '../api-manager/api-manager';

/*
  Generated class for the UserManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserManagerProvider {

  constructor(public http: Http,
    public authenticationProvider: RestAuthenticationProvider) {
    console.log('Hello UserManagerProvider Provider');
  }

  getUserFromOAuth(id, type): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      // resolve(this.authenticationProvider.demoUser);

      this.http.get(ApiManagerProvider.process(ApiManagerProvider.OAUTH_PROFILE_TO_USER_API, {
        oAuthId: id
      }))
        .map(response => response.json())
        .subscribe(user => {
          resolve(user);
        }, error => reject(error));
    });
  }

  createOAuthProfile(profile): Promise<OAuthProfile> {
    return new Promise<OAuthProfile>((resolve, reject) => {
      this.http.post(ApiManagerProvider.OAUTH_PROFILES_API, profile)
        .map(res => res.json())
        .subscribe(profile => {
          resolve(profile);
        }, error => reject(error));
    });
  }
  
  getAuthenticationProvider(): AuthenticationProvider {
    return this.authenticationProvider;
    // return new DemoAuthenticationProvider();
    // return null;
  }
}
