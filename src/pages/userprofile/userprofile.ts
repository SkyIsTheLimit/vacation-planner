import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';

import { FacebookAuth, Authentication } from '../../providers';

import {
  DispatchPage,
  PreferencesPage
} from '../';

/**
 * Generated class for the UserprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {
  profile: any = {};
  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FacebookAuth, public authentication: Authentication, public app: App, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');

    this.checkFacebookLogin();

    this.checkForLogin();
  }

  gotoPreferences() {
    this.app.getRootNav().push(PreferencesPage);
  }

  checkForLogin() {
    this.authentication.getLoggedInUser().then((user) => {
      this.user = user;
      console.debug('Reveived Demo User', this.user);
    }).catch(() => {
      this.authentication.logout().then(() => {
        console.debug('No User receieved', 'logging out');
        // this.viewCtrl.dismiss();
        this.app.getRootNav().push(DispatchPage);

        // this.navCtrl.popToRoot();
        // this.navCtrl.pop();
        // this.navCtrl.setRoot(DispatchPage);
      })
    });
  }

  checkFacebookLogin() {
    console.debug('[User Profile Page]: Trying to login');
    this.fb.isLoggedIn()
      .then(() => {
        console.debug('Recieved success login');
        this.getProfile();
      })
      .catch((e) => {
        console.debug('Received error', e);
      });
  }

  getProfile() {
    this.fb.getProfile("id,name,picture").then((res) => {
      this.profile = {
        id: res.id,
        name: res.name,
        picture: res.picture.data.url
      };
    });
  }

  logout() {
    this.authentication.logout().then(() => {
      this.fb.logout()
        .then(() => this.app.getRootNav().setRoot(DispatchPage))
        .catch(() => this.app.getRootNav().setRoot(DispatchPage));
    });
  }
}
