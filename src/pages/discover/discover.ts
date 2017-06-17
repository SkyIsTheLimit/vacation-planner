import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';

import { DiscoveryProvider } from '../../providers/discovery/discovery';
// import { FacebookAuth } from '../../providers/auth/facebook.auth';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FacebookAuth } from '../../providers';

/**
 * Generated class for the DiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  restaurants: Array<any>;
  profile: any = {
    isLoggedIn: false
  };

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private discovery: DiscoveryProvider,
    private fb: FacebookAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverPage');

    this.checkFacebookLoginStatus();
  }

  loadRestaurants() {
    this.restaurants = this.discovery.loadRestaurants();
    console.log('Loaded Restaurants', this.restaurants);
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
    this.fb.getProfile('email,picture,name').then(res => {
      console.log('Received profile', res);
      this.profile = {
        id: res.id,
        email: res.email,
        picture: res.picture.data.url,
        name: res.name,
        isLoggedIn: true
      };
    }).catch(e => {
      console.error('Could not retrieve profile');
    });
  }

  loginToFacebook() {
    this.fb.login()
      .then(() => this.getProfile())
      .catch(() => console.error('Not logged in'));
  }
}
