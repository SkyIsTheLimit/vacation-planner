import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DispatchPage } from './dispatch';

@NgModule({
  declarations: [
    DispatchPage,
  ],
  imports: [
    IonicPageModule.forChild(DispatchPage),
  ],
  exports: [
    DispatchPage
  ]
})
export class DispatchPageModule {}
