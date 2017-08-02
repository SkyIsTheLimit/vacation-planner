import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TravelCompanionProvider } from '../../providers';

import { Restaurant } from '../../models/restaurant';
import { TravelassistantPage } from '../travelassistant/travelassistant';
import { CompanionCriteria } from '../../models/companion-criteria.model';
/**
 * Generated class for the TravelassistantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travelcompanion',
  templateUrl: 'travelcompanion.html',
})
export class TravelcompanionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tc: TravelCompanionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelassistantPage');
  }

  loadNearbyPlaces(resulttype) {
   //  this.navParams.data = restype;
   let criteria: CompanionCriteria = {
      type: resulttype,
      keyword: "",
      filter: "",
      location: "",
      radius: "10000"
    };
    if(resulttype=='airport')
    {
      criteria.radius = "30000";
    }

   console.log("result type"  + resulttype);
    this.navCtrl.push(TravelassistantPage,criteria); 
  }

}
