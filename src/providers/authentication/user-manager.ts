import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../../models';

import {
  AuthenticationProvider,
  DemoAuthenticationProvider
} from './providers';

/*
  Generated class for the UserManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserManagerProvider {

  constructor(public http: Http,
    public authenticationProvider: DemoAuthenticationProvider) {
    console.log('Hello UserManagerProvider Provider');
  }

  getUserFromOAuth(id, type): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      resolve(this.authenticationProvider.demoUser);
    });
  }

  getAuthenticationProvider(): AuthenticationProvider {
    return this.authenticationProvider;
    // return new DemoAuthenticationProvider();
    // return null;
  }
}
