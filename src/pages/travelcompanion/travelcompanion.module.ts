import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelcompanionPage } from './travelcompanion';

@NgModule({
  declarations: [
    TravelcompanionPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelcompanionPage),
  ],
  exports: [
    TravelcompanionPage
  ]
})
export class TravelcompanionPageModule {}
