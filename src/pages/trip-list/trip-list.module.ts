import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripListPage } from './trip-list';

@NgModule({
  declarations: [
    TripListPage,
  ],
  imports: [
    IonicPageModule.forChild(TripListPage),
  ],
  exports: [
    TripListPage
  ]
})
export class TripListPageModule {}
