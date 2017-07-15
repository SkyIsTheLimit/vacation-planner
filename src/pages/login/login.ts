import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DispatchPage } from '../';

import { FacebookAuth } from '../../providers';

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
  profile: any;
  message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FacebookAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.checkFacebookLoginStatus();
  }

  checkFacebookLoginStatus() {
    this.fb.isLoggedIn()
      .then(() => this.getProfile())
      .catch(() => console.error('Not logged in'));
  }

  logoutOfFacebook() {
    this.fb.logout()
      .then(() => {
        this.profile = {
          isLoggedIn: false
        };
        console.log('Logged out');
      })
      .catch(() => console.error('Could not logout'));
  }

  getProfile() {
    return this.fb.getProfile('email,picture,name').then(res => {
      console.log('Received profile', res);
      this.profile = {
        id: res.id,
        email: res.email,
        picture: res.picture.data.url,
        name: res.name,
        isLoggedIn: true
      };

      return this.profile;
    }).catch(e => {
      console.error('Could not retrieve profile');
    });
  }

  addUserIfNecessary() {
    return this.getProfile().then(profile => console.log('Adding profile to database', profile));
  }

  loginWithFacebook() {
    this.fb.login()
      .then(res => {
        this.addUserIfNecessary().then(() => this.navCtrl.setRoot(DispatchPage));
      })
      .catch((e) => {
        this.message = JSON.stringify(e);
        console.error('Not logged in')
      });
  }
}
