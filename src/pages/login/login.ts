import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import {
  DispatchPage,
  SignupPage,
  PreferencesPage
} from '../../pages';

import {
  AuthenticationProvider,
  OAuthProvider,
  UserManagerProvider,
  ApiManagerProvider
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
  credentials = {};

  constructor(public navCtrl: NavController,
    public loading: LoadingController,
    public navParams: NavParams,
    public toast: ToastController,
    public userManager: UserManagerProvider,
    public apiManager: ApiManagerProvider) {
    this.authenticationProvider = this.userManager.getAuthenticationProvider();
    this.oauthProviders = this.authenticationProvider.getLinkedProviders();

    this.apiManager.loadAirports()
      .subscribe((data) => {
        console.info('Received Airport Codes', data);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithProvider(credentials) {
    let loader = this.loading.create({
      content: 'Trying to log in!'
    });

    loader.present();

    this.authenticationProvider.login(credentials).then((user) => {
      this.navCtrl.push(DispatchPage);
      loader.dismiss();

    }).catch(() => {
      loader.dismiss();

      this.toast.create({
        message: 'Invalid username or password',
        duration: 3000
      }).present();
    });
  }

  loginWithOAuthProvider(provider: OAuthProvider) {
    let loader = this.loading.create({
      content: 'Trying to log in!'
    });

    loader.present();

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
        .then(user => {
          return this.authenticationProvider.login({
            username: user.username,
            password: user.password
          });
        }).then(loggedInUser => {
          loggedInUser.linkedAccount = this.oauthProfile;
          loggedInUser.picture = this.oauthProfile.picture.data.url;

          // [TODO] The account linkage will have to be saved too.
          loader.dismiss();

          this.navCtrl.push(DispatchPage);
        }).catch(error => {
          let user = {
            username: profile.id,
            password: profile.id,
            name: profile.name,
            email: profile.email,
            // linkedAccount: profile,
            picture: profile.picture
          };

          this.authenticationProvider.signup(user).then(user => {
            if (profile.picture.data) {
              profile.picture = profile.picture.data.url;
            }

            return this.userManager.createOAuthProfile(profile);
          }).then(profile => {
            return this.authenticationProvider.link(profile).then(user => {
              loader.dismiss();
              this.navCtrl.push(PreferencesPage);
            });
          });
        });
    }).catch(reason => {
      loader.dismiss();

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
