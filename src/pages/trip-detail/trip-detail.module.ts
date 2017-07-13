import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripDetailPage } from './trip-detail';

@NgModule({
  declarations: [
    TripDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TripDetailPage),
  ],
  exports: [
    TripDetailPage
  ]
})
export class TripDetailPageModule {}
