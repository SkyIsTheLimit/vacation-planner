import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightDetailModalPage } from './flight-detail-modal';

@NgModule({
  declarations: [
    FlightDetailModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightDetailModalPage),
  ],
  exports: [
    FlightDetailModalPage
  ]
})
export class FlightDetailModalPageModule {}
