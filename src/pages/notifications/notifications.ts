import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
	star:any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.star = "star";
  	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad NotificationsPage');
	}

	itemSelected(event, button){
  		console.log(event);
  		console.log(button);
  		//$(button).addClass('moron')
  	}


}
