import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelassistantPage } from './travelassistant';

@NgModule({
  declarations: [
    TravelassistantPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelassistantPage),
  ],
  exports: [
    TravelassistantPage
  ]
})
export class TravelassistantPageModule {}
