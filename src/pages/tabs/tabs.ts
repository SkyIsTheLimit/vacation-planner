import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DiscoveryPage } from '../discovery/discovery';
import { UserprofilePage } from '../userprofile/userprofile';
import { BookkeeperPage } from '../bookkeeper/bookkeeper';
import { TravelassistantPage } from '../travelassistant/travelassistant';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  tab1Root = DiscoveryPage;
  tab2Root = TravelassistantPage;
  tab3Root = BookkeeperPage;
  tab4Root = UserprofilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
