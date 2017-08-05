import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripComparisonPage } from './trip-comparison';

@NgModule({
  declarations: [
    TripComparisonPage,
  ],
  imports: [
    IonicPageModule.forChild(TripComparisonPage),
  ],
  exports: [
    TripComparisonPage
  ]
})
export class TripComparisonPageModule {}
