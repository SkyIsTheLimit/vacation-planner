import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPreferenceListPage } from './location-preference-list';

@NgModule({
  declarations: [
    LocationPreferenceListPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationPreferenceListPage),
  ],
  exports: [
    LocationPreferenceListPage
  ]
})
export class LocationPreferenceListPageModule {}
