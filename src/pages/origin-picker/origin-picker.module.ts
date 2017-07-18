import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OriginPickerPage } from './origin-picker';

@NgModule({
  declarations: [
    OriginPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(OriginPickerPage),
  ],
  exports: [
    OriginPickerPage
  ]
})
export class OriginPickerPageModule {}
