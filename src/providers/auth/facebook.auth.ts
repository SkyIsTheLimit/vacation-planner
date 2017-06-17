import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/*
  Generated class for the FacebookAuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FacebookAuth {
  userId: any;
  profile: any;

  constructor(private fb: Facebook) {
  }

  login() {
    console.debug('Logging in with facebook');
    return this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => this.userId = res.authResponse.userID);
  }

  getProfile(fields) {
    console.debug('Invoking facebook API with user ID ', this.userId);
    return this.fb.api(this.userId + '/?fields=' + fields, ['public_profile']);
  }

  isLoggedIn() {
    return this.fb.getLoginStatus();
  }

  logout() {
    return this.fb.logout();
  }
}
