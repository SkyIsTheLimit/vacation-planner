import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationManagerProvider } from '../../providers/notification-manager/notification-manager';
/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  notifications: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private notificationProvider:NotificationManagerProvider) {
    this.getNotifications();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NotificationPage');
  }

  getNotifications(){
    this.notificationProvider.getNotifications().subscribe(
      result => {
        console.log(result);
        this.notifications=result;
      },
      err =>{
        console.error("Error : " + err);
      }
    );
  }
}
