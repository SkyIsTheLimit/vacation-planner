import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelListPage } from './hotel-list';

@NgModule({
  declarations: [
    HotelListPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelListPage),
  ],
  exports: [
    HotelListPage
  ]
})
export class HotelListPageModule {}
