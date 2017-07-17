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
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyTripsPage } from '../pages/my-trips/my-trips';
import { TripListPage } from '../pages/trip-list/trip-list';
import { TripDetailPage } from '../pages/trip-detail/trip-detail';

import {
  DispatchPage,
  LoginPage,
} from '../pages';

import { Facebook } from '@ionic-native/facebook';
import { FacebookAuth, Authentication } from '../providers';

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
    DiscoveryPage,
    TravelassistantPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage,
    DispatchPage,
    LoginPage,
    NotificationsPage,
    MyTripsPage,
    TripListPage,
    TripDetailPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoveryPage,
    TravelassistantPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage,
    DispatchPage,
    LoginPage,
    NotificationsPage,
    MyTripsPage,
    TripListPage,
    TripDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    FacebookAuth,
    Authentication,
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
