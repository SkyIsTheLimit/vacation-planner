import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TravelCompanionProvider } from '../../providers';

/**
 * Generated class for the TravelcompaniondetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travelcompaniondetail',
  templateUrl: 'travelcompaniondetail.html',
})
export class TravelcompaniondetailPage {
  restaurant: any = "";
  details: Array<any> = [];
  reviews: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private tc: TravelCompanionProvider) {
  }

  ionViewDidLoad() {
    this.restaurant = this.navParams.data;
    console.log("restaurant name" + this.restaurant.name);
    console.log("restaurant name" + this.restaurant.place_id);
    console.log('ionViewDidLoad TravelcompaniondetailPage');
    this.getplacedetails();
  }
  getplacedetails()
  {
    console.log("restaurant name" + this.restaurant.place_id);
    let res = this.tc.getPlaceDetails(this.restaurant.place_id).subscribe(res => this.details = res.result);
    console.log("results:" + res);
  
    //res.subscribe(results => this.reviews = results.result.reviews);
    console.log("data:" + res);
    console.log("details:" + this.details.length);
    console.log("detail address:" + this.details[0]);
  }

}
