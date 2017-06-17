import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DiscoverPage } from '../pages/pages';

import { Facebook } from '@ionic-native/facebook';
import { FacebookAuth } from '../providers/auth/facebook.auth';

import {  
          DiscoveryProvider, 
          BookkeeperProvider, 
          CurrencyManagerProvider, 
          NotificationManagerProvider, 
          FinancePlannerProvider, 
          TravelCompanionProvider, 
          ExpenseLogProvider 
        } from '../providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoverPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    FacebookAuth,
    DiscoveryProvider,
    NotificationManagerProvider,
    BookkeeperProvider,
    FinancePlannerProvider,
    CurrencyManagerProvider,
    ExpenseLogProvider,
    TravelCompanionProvider
  ]
})
export class AppModule { }
