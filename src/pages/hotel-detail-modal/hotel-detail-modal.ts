import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

/**
 * Generated class for the HotelDetailModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hotel-detail-modal',
  templateUrl: 'hotel-detail-modal.html',
})
export class HotelDetailModalPage {
hotel: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public app: App) {
    this.hotel = this.navParams.get("hotel");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelDetailModalPage');
  }

   dismiss() {
    this.viewCtrl.dismiss();
  }

  starRatingArray(rating){
    var ratings = [];
    for (var i= 0; i < rating; i++ ){
      ratings.push(i);
    }
    console.log(ratings);
    return ratings;
  }
}
