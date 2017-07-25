import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, ToastController } from 'ionic-angular';

import {
  // FacebookAuth,
  // Authentication, 
  AuthenticationProvider,
  UserManagerProvider
} from '../../providers';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public viewCtrl: ViewController,
    public userManager: UserManagerProvider,
    public toast: ToastController) {
    this.authenticationProvider = this.userManager.getAuthenticationProvider();
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

  // checkForLogin() {
  //   this.authentication.getLoggedInUser().then((user) => {
  //     this.user = user;
  //     console.debug('Reveived Demo User', this.user);
  //   }).catch(() => {
  //     this.authentication.logout().then(() => {
  //       console.debug('No User receieved', 'logging out');
  //       // this.viewCtrl.dismiss();
  //       this.app.getRootNav().push(DispatchPage);

  //       // this.navCtrl.popToRoot();
  //       // this.navCtrl.pop();
  //       // this.navCtrl.setRoot(DispatchPage);
  //     })
  //   });
  // }

  // checkFacebookLogin() {
  //   console.debug('[User Profile Page]: Trying to login');
  //   this.fb.isLoggedIn()
  //     .then(() => {
  //       console.debug('Recieved success login');
  //       this.getProfile();
  //     })
  //     .catch((e) => {
  //       console.debug('Received error', e);
  //     });
  // }

  // getProfile() {
  //   this.fb.getProfile("id,name,picture").then((res) => {
  //     this.profile = {
  //       id: res.id,
  //       name: res.name,
  //       picture: res.picture.data.url
  //     };
  //   });
  // }

  // logout() {
  //   this.authentication.logout().then(() => {
  //     this.fb.logout()
  //       .then(() => this.app.getRootNav().setRoot(DispatchPage))
  //       .catch(() => this.app.getRootNav().setRoot(DispatchPage));
  //   });
  // }

  logoutWithProvider() {
    this.authenticationProvider.logout()
      .then(() => this.app.getRootNav().setRoot(DispatchPage))
      .catch(() => this.app.getRootNav().setRoot(DispatchPage));
  }
}
