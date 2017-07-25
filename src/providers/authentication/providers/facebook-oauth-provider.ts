import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { OAuthProvider } from './o-auth-provider';

import { OAuthProfile } from '../../../models';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class FacebookOAuthProvider implements OAuthProvider {
    currentUser: OAuthProfile = {
        id: '',
        email: '',
        name: '',
        picture: {
            data: {}
        },
        type: 'facebook'
    };

    constructor(private fb: Facebook) { }

    getName(): string {
        return 'Facebook';
    }

    login(): Promise<OAuthProfile> {
        return new Promise<OAuthProfile>((resolve, reject) => {
            this.fb.login(['public_profile', 'email'])
                .then((res: FacebookLoginResponse) => {
                    this.currentUser.id = res.authResponse.userID;

                    resolve(this.currentUser);

                    return res;
                }).catch(reason => {
                    reject(reason);
                });
        });
    }

    logout(): Promise<Boolean> {
        return new Promise<Boolean>((resolve, reject) => {
            this.fb.logout().then(() => {
                this.currentUser = {
                    id: '',
                    email: '',
                    name: '',
                    picture: {
                        data: {}
                    },
                    type: 'facebook'
                };

                resolve(true);
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    getAuthenticatedUser(extraInfo: any): Promise<OAuthProfile> {
        return new Promise<OAuthProfile>((resolve, reject) => {
            this.fb.api(this.currentUser.id + '/?fields=' + extraInfo.fields, ['public_profile'])
                .then((res) => {
                    this.currentUser.email = res.email;
                    this.currentUser.name = res.name;
                    this.currentUser.picture = res.picture;

                    resolve(this.currentUser);

                    return res;
                }).catch(reason => {
                    reject(reason);
                });
        });
    }

    isLoggedIn(): Promise<Boolean> {
        return new Promise<Boolean>((resolve, reject) => {
            this.fb.login(['public_profile', 'email'])
                .then((res: FacebookLoginResponse) => {
                    resolve(true);
                }).catch(reason => {
                    resolve(false);
                });
        });
    }

    getLoginButtonUrl() {
        return "https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?oh=ffe8429a1f7d465af26210ae1e399cf0&oe=59C43EEA";
    }

    getContinueButtonUrl() {
        return "https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?oh=ffe8429a1f7d465af26210ae1e399cf0&oe=59C43EEA";
    }
}