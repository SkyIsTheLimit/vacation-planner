import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCriteriaPage } from './search-criteria';

@NgModule({
  declarations: [
    SearchCriteriaPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCriteriaPage),
  ],
  exports: [
    SearchCriteriaPage
  ]
})
export class SearchCriteriaPageModule {}
