import { Injectable } from '@angular/core';

import { AuthenticationProvider } from './authentication-provider';
import { OAuthProvider } from './o-auth-provider';
import { FacebookOAuthProvider } from './facebook-oauth-provider';
import { User, OAuthProfile } from '../../../models';

@Injectable()
export class DemoAuthenticationProvider implements AuthenticationProvider {
    demoUser: User = {
        id: 1,
        username: 'foo',
        name: 'Test User',
        email: 'foo@baz.com',
        picture: '',
        linkedAccounts: []
    };
    loggedInStatus = true;

    constructor(public facebook: FacebookOAuthProvider) {
        console.debug('Initialized Demo Authentication Provider');
    }

    isLoggedIn(): Promise<Boolean> {
        return new Promise<Boolean>(() => {
            return this.loggedInStatus;
        });
    }

    getAuthenticatedUser(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            if (this.loggedInStatus) {
                resolve(this.demoUser);
            } else {
                reject();
            }
        });
    }

    getLinkedProviders(): Array<OAuthProvider> {
        return [this.facebook];
    }

    login(email) {
        return new Promise<User>((resolve, reject) => {
            this.loggedInStatus = true;

            resolve(this.demoUser);
        });
    }

    logout() {
        return new Promise<Boolean>((resolve, reject) => {
            this.loggedInStatus = false;

            resolve(this.loggedInStatus);
        });
    }

    signup(email) {
        return this.login(email);
    }
}