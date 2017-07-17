import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AuthenticationProvider } from './providers/provider';
import { DemoAuthenticationProvider } from './providers/demo.authentication.provider';

/*
  Generated class for the FacebookAuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authentication {
    provider: AuthenticationProvider;

    constructor() {
        console.info('Initializing authentication provider.');
        this.provider = this.getAuthenticationProvider();
    }

    getAuthenticationProvider() {
        return new DemoAuthenticationProvider();
    }

    /**
     * Function that informs the system when a user is logged in or not.
     */
    isLoggedIn() {
        return this.provider.isLoggedIn();
    }

    /**
     * Function to retrieve the logged in user.
     */
    getLoggedInUser() {
        return this.provider.getLoggedInUser();
    }

    signup(email) {
        return this.provider.signup(email);
    }

    login(email) {
        return this.provider.login(email);
    }

    /**
     * Log the user out.
     */
    logout() {
        return this.provider.logout();
    }
}
