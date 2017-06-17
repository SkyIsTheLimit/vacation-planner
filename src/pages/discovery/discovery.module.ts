import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoveryPage } from './discovery';

@NgModule({
  declarations: [
    DiscoveryPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoveryPage),
  ],
  exports: [
    DiscoveryPage
  ]
})
export class DiscoveryPageModule {}
