import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTripsPage } from './my-trips';

@NgModule({
  declarations: [
    MyTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTripsPage),
  ],
  exports: [
    MyTripsPage
  ]
})
export class MyTripsPageModule {}
