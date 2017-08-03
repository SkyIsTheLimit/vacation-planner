import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelcompaniondetailPage } from './travelcompaniondetail';

@NgModule({
  declarations: [
    TravelcompaniondetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelcompaniondetailPage),
  ],
  exports: [
    TravelcompaniondetailPage
  ]
})
export class TravelcompaniondetailPageModule {}
