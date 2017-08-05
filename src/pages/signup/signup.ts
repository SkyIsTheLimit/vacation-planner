import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {
  // Authentication,
  AuthenticationProvider,
  UserManagerProvider,
  OAuthProvider
} from '../../providers';

import {
  DispatchPage,
  PreferencesPage
} from '../../pages';

import {
  User,
  OAuthProfile
} from '../../models';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  authenticationProvider: AuthenticationProvider;
  oauthProviders: Array<OAuthProvider> = [];
  credentials = {};
  repeatPassword: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    // public authentication: Authentication,
    public userManager: UserManagerProvider,
    public toast: ToastController) {
    this.authenticationProvider = this.userManager.getAuthenticationProvider();
    this.oauthProviders = this.authenticationProvider.getLinkedProviders();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupWithProvider(credentials) {
    if (!this.repeatPassword || (this.repeatPassword !== credentials.password)) {
      this.toast.create({
        message: 'Please enter same repeat password',
        duration: 4000
      }).present();

      return;
    }

    this.authenticationProvider.signup(credentials).then(function () {
      this.navCtrl.push(DispatchPage);
    }).catch(() => {
      this.navCtrl.push(DispatchPage);
    });
  }



  signupWithOAuthProvider(provider: OAuthProvider) {
    provider.getAuthenticatedUser({
      fields: 'email,name,picture'
    })
      .then(profile => {
        if (profile.picture.data) {
          profile.picture = profile.picture.data.url;
        }
        // Create the oauth-profile.
        return this.userManager.createOAuthProfile(profile);
      })
      .then((profile: OAuthProfile) => {
        let user = {
          username: profile.id,
          password: profile.id,
          name: profile.name,
          email: profile.email,
          linkedAccount: profile,
          picture: profile.picture
        };

        return this.authenticationProvider.signup(user);
      }).then(user => {
        this.navCtrl.push(DispatchPage);
      }).catch(error => {
        // Facebook user not logged in.

        provider.login()
          .then(profile => {
            if (profile.picture.data) {
              profile.picture = profile.picture.data.url;
            }
            // Create the oauth-profile.
            return this.userManager.createOAuthProfile(profile);
          })
          .then((profile: OAuthProfile) => {
            let user = {
              username: profile.id,
              password: profile.id,
              name: profile.name,
              email: profile.email,
              linkedAccount: profile,
              picture: profile.picture
            };

            return this.authenticationProvider.signup(user);
          }).then(user => {
            this.navCtrl.push(DispatchPage);
          }).catch(error => {
          });
      });
  }
}
