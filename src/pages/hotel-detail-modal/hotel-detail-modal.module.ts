import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailModalPage } from './hotel-detail-modal';

@NgModule({
  declarations: [
    HotelDetailModalPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailModalPage),
  ],
  exports: [
    HotelDetailModalPage
  ]
})
export class HotelDetailModalPageModule {}
