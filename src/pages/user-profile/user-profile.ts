import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, ToastController } from 'ionic-angular';

import {
  // FacebookAuth,
  // Authentication, 
  AuthenticationProvider,
  UserManagerProvider
} from '../../providers';

import { User } from '../../models';

import { OAuthProvider } from '../../providers/authentication/providers/o-auth-provider';

import {
  DispatchPage,
  PreferencesPage,
  AboutPage
} from '../';

/**
 * Generated class for the UserprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  user: any = {};
  authenticationProvider: AuthenticationProvider;
  oAuthProviders: Array<OAuthProvider> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public viewCtrl: ViewController,
    public userManager: UserManagerProvider,
    public toast: ToastController) {
    this.authenticationProvider = this.userManager.getAuthenticationProvider();
    this.oAuthProviders = this.authenticationProvider.getLinkedProviders();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');

    this.checkLoginWithProvider();
  }

  gotoPreferences() {
    this.app.getRootNav().push(PreferencesPage);
  }

  gotoAbout() {
    this.navCtrl.push(AboutPage);
  }

  checkLoginWithProvider() {
    this.authenticationProvider.getAuthenticatedUser().then((user) => {
      this.user = user;
    }).catch((e) => {
      this.toast.create({
        message: 'Not logged in',
        duration: 2000
      }).present();

      this.app.getRootNav().push(DispatchPage);
    });
  }

  loginWithOAuthProvider(provider: OAuthProvider) {
    let receivedProfile = null;

    provider.login()
      .then(profile => {
        return provider.getAuthenticatedUser({
          fields: 'name,email,picture'
        }).then(profile => {
          if (profile.picture.data) {
            profile.picture = profile.picture.data.url;
          }

          receivedProfile = profile;
          return this.userManager.createOAuthProfile(profile)
            .then(profile => {
              return this.authenticationProvider.link(receivedProfile);
            });
        });
      })
      .then(user => {
        console.info('Received updated user', user);
        this.user = user;
      }).catch(reason => {
        // First create the user.
        this.userManager.createOAuthProfile(receivedProfile).then(profile => {
          return provider.getAuthenticatedUser({
            fields: 'name,email,picture'
          }).then(profile => {
            if (profile.picture.data) {
              profile.picture = profile.picture.data.url;
            }

            return this.authenticationProvider.link(profile);
          }).catch(reason => {
            this.toast.create({
              message: reason,
              duration: 5000
            }).present();
          });
        })

        this.toast.create({
          message: reason,
          duration: 5000
        }).present();
      });
  }

  logoutWithProvider() {
    this.authenticationProvider.logout()
      .then(() => this.app.getRootNav().setRoot(DispatchPage))
      .catch(() => this.app.getRootNav().setRoot(DispatchPage));
  }
}
