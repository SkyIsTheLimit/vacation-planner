import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Authentication } from '../../providers';

import {
  DispatchPage,
  PreferencesPage
} from '../../pages';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authentication: Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    this.authentication.signup('').then((user) => {
      this.navCtrl.push(PreferencesPage);
    }).catch(() => {
      this.navCtrl.push(DispatchPage);
    })
  }
}
