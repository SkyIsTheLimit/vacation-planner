import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialPage } from './trial';

@NgModule({
  declarations: [
    TrialPage,
  ],
  imports: [
    IonicPageModule.forChild(TrialPage),
  ],
  exports: [
    TrialPage
  ]
})
export class TrialPageModule {}
