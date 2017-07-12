import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

import { FacebookAuth } from '../../providers';

import { DispatchPage } from '../';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FacebookAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');

    this.checkFacebookLogin();
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
  
  openNotifications() {
    this.navCtrl.push( NotificationPage );
  }

  logout() {
    this.fb.logout()
      .then(() => this.navCtrl.setRoot(DispatchPage))
      .catch(() => this.navCtrl.setRoot(DispatchPage));
  }
}
