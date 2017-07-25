import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {
  DispatchPage,
  SignupPage
} from '../../pages';

import {
  AuthenticationProvider,
  OAuthProvider,
  UserManagerProvider
} from '../../providers';

import {
  OAuthProfile
} from '../../models';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authenticationProvider: AuthenticationProvider;
  oauthProviders: Array<OAuthProvider>;
  oauthProfile: OAuthProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, public userManager: UserManagerProvider) {
    this.authenticationProvider = this.userManager.getAuthenticationProvider();
    this.oauthProviders = this.authenticationProvider.getLinkedProviders();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithProvider(credentials) {
    this.authenticationProvider.login(credentials).then((user) => {
      this.navCtrl.push(DispatchPage);
    }).catch(() => {
      this.toast.create({
        message: 'Invalid username or password',
        duration: 3000
      }).present();
    });
  }

  loginWithOAuthProvider(provider: OAuthProvider) {
    provider.login().then((profile) => {
      console.info('Logged in successfully', profile);

      return profile;
    }).then(profile => {
      return provider.getAuthenticatedUser({
        fields: 'email,name,picture'
      });
    }).then(profile => {
      this.oauthProfile = profile;

      // [TODO] Retrieve user account linked to this oauth profile and log in as that.
      // [TODO] Also, use the image URL from this OAuth provider and set it as the picture property of the user account.

      // Nobody is logged in currently.
      return this.userManager.getUserFromOAuth(profile.id, profile.type)
    }).then(user => {
      return this.authenticationProvider.login({
        username: user.username,
        password: ''
      });
    }).then(loggedInUser => {
      loggedInUser.linkedAccounts = loggedInUser.linkedAccounts || [];
      loggedInUser.linkedAccounts.push(this.oauthProfile);
      loggedInUser.picture = this.oauthProfile.picture.data.url;

      // [TODO] The account linkage will have to be saved too.

      this.navCtrl.push(DispatchPage);
    }).catch(reason => {
      this.toast.create({
        message: 'Something went wrong: ' + reason,
        duration: 2000
      });
    });
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }
}
