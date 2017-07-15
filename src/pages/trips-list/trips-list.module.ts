import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripsListPage } from './trips-list';

@NgModule({
  declarations: [
    TripsListPage,
  ],
  imports: [
    IonicPageModule.forChild(TripsListPage),
  ],
  exports: [
    TripsListPage
  ]
})
export class TripsListPageModule {}
