import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { TravelassistantPage } from '../pages/travelassistant/travelassistant';
import { BookkeeperPage } from '../pages/bookkeeper/bookkeeper';
import { TabsPage } from '../pages/tabs/tabs';
import { TripsPage } from '../pages/trips/trips';
import { NotificationsPage } from '../pages/notifications/notifications';

import {
  DispatchPage,
  HomePage,
  LoginPage,
  NotificationPage
} from '../pages';

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
    DiscoveryPage,
    TravelassistantPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage,
    DispatchPage,
    LoginPage,
    TripsPage,
    NotificationsPage
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
    DiscoveryPage,
    TravelassistantPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage,
    DispatchPage,
    LoginPage,
    TripsPage,
    NotificationsPage
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
