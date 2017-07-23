import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

import {
  OAuthProvider,
  AuthenticationProvider,
  UserManagerProvider
} from '../../providers';

import {
  LoginPage,
  TabsPage
} from '../../pages';

/**
 * Generated class for the DispatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dispatch',
  templateUrl: 'dispatch.html',
})
export class DispatchPage {
  loader: Loading;
  authenticationProvider: AuthenticationProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public userManager: UserManagerProvider) {
    this.authenticationProvider = this.userManager.getAuthenticationProvider();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchPage');

    this.loader = this.loadingCtrl.create({
      content: 'Please wait . . .'
    });

    this.loader.present();

    this.checkLoginWithProvider();
  }

  checkLoginWithProvider() {
    this.authenticationProvider.getAuthenticatedUser().then((user) => {
      this.loader.dismiss();

      this.navCtrl.setRoot(TabsPage);
    }).catch((e) => {
      this.loader.dismiss();

      this.navCtrl.setRoot(LoginPage);
    });
  }
}
