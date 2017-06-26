import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookkeeperPage } from './bookkeeper';

@NgModule({
  declarations: [
    BookkeeperPage,
  ],
  imports: [
    IonicPageModule.forChild(BookkeeperPage),
  ],
  exports: [
    BookkeeperPage
  ]
})
export class BookkeeperPageModule {}
