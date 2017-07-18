import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { FacebookAuth, Authentication } from '../../providers';

import { LoginPage, TabsPage } from '../';

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
  page: any;
  profile: any;
  destinationSearch: any;
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private fb: FacebookAuth, public authentication: Authentication) {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait . . .'
    });

    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchPage');

    // this.checkFacebookLogin();
    this.checkLogin();
  }

  checkLogin() {
    this.authentication.getLoggedInUser().then((user) => {
      console.debug('Recieved success login');
      this.page = "discovery";
      this.loader.dismiss();
      this.gotoTabsPage();
    }).catch((e) => {
      console.debug('Received error', e);
      this.page = "login";
      this.loader.dismiss();
      this.gotoLoginPage();
    });
  }

  checkFacebookLogin() {
    console.debug('[Dispatch Page]: Trying to login');
    this.fb.isLoggedIn()
      .then(() => {
        console.debug('Recieved success login');
        this.page = "discovery";
        this.getProfile().then(() => this.gotoTabsPage());
      })
      .catch((e) => {
        console.debug('Received error', e);
        this.page = "login";
        this.gotoLoginPage();
      });
  }

  getProfile() {
    return this.fb.getProfile("id,name,picture").then((res) => {
      this.profile = {
        id: res.id,
        name: res.name,
        picture: res.picture.data.url
      };
    });
  }

  redirect() {
    if (this.page === "discovery") {
      this.gotoTabsPage();
    } else {
      this.gotoLoginPage();
    }
  }

  gotoLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  gotoTabsPage() {
    this.navCtrl.setRoot(TabsPage);
  }
}
