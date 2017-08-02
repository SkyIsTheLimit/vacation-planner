import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationProvider } from './authentication-provider';
import { OAuthProvider } from './o-auth-provider';
import { FacebookOAuthProvider } from './facebook-oauth-provider';
import { ApiManagerProvider } from '../../api-manager/api-manager';

import {
    User,
    OAuthProfile
} from '../../../models';

@Injectable()
export class RestAuthenticationProvider implements AuthenticationProvider {
    user: User;
    loggedInStatus = false;

    constructor(public facebook: FacebookOAuthProvider, public http: Http) {
        console.debug('Initialized REST Authentication Provider');
    }

    isLoggedIn(): Promise<Boolean> {
        return new Promise<Boolean>(() => {
            return this.loggedInStatus;
        });
    }

    getAuthenticatedUser(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            if (this.loggedInStatus) {
                resolve(this.user);
            } else {
                reject();
            }
        });
    }

    getLinkedProviders(): Array<OAuthProvider> {
        return [this.facebook];
    }

    login(credentials) {
        console.log('Logging in using rest auth provider');
        return new Promise<User>((resolve, reject) => {
            this.http.post(ApiManagerProvider.LOGIN_API, credentials)
                .map(response => response.json())
                .subscribe(user => {
                    this.user = user;

                    this.loggedInStatus = true;

                    resolve(this.user);
                }, error => {
                    this.loggedInStatus = false;
                    reject('Invalid username or password');
                });
        });
    }

    logout() {
        return new Promise<Boolean>((resolve, reject) => {
            this.loggedInStatus = false;
            this.user = null;

            resolve(this.loggedInStatus);
        });
    }

    signup(credentials) {
        return new Promise<User>((resolve, reject) => {
            this.http.post(ApiManagerProvider.USERS_API, credentials)
                .map(response => response.json())
                .subscribe(user => {
                    this.user = user;
                    this.loggedInStatus = true;

                    resolve(this.user);
                }, error => {
                    this.loggedInStatus = false;

                    reject('Username already taken');
                });
        });
    }

    link(profile: OAuthProfile): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            if (profile.picture.data) {
                profile.picture = profile.picture.data.url;
            }

            this.http.post(ApiManagerProvider.process(ApiManagerProvider.LINK_USER_API, {
                id: this.user.id,
                oAuthId: profile.id
            }), {})
                .map(response => response.json())
                .subscribe(user => {
                    this.user = user;
                    this.loggedInStatus = true;

                    resolve(this.user);
                }, error => {
                    reject('Could not link profiles : ' + error);
                });
        });
    }
}