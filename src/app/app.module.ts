import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {
  DispatchPage,
  DiscoveryPage,
  UserprofilePage,
  TravelassistantPage,
  TravelcompanionPage,
  BookkeeperPage,
  TabsPage,
  LoginPage,
  NotificationsPage,
  MyTripsPage,
  TripListPage,
  TripDetailPage,
  SignupPage,
  PreferencesPage,
  AboutPage,
  SearchCriteriaPage,
  LocationPreferenceListPage,
  OriginPickerPage
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
import { TripManagerProvider } from '../providers/trip-manager/trip-manager';

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    TravelassistantPage,
    TravelcompanionPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage,
    DispatchPage,
    LoginPage,
    NotificationsPage,
    MyTripsPage,
    TripListPage,
    TripDetailPage,
    SignupPage,
    PreferencesPage,
    AboutPage,
    SearchCriteriaPage,
    LocationPreferenceListPage,
    OriginPickerPage
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
    TravelcompanionPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage,
    DispatchPage,
    LoginPage,
    NotificationsPage,
    MyTripsPage,
    TripListPage,
    TripDetailPage,
    SignupPage,
    PreferencesPage,
    AboutPage,
    SearchCriteriaPage,
    LocationPreferenceListPage,
    OriginPickerPage
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
    TravelCompanionProvider,
    TripManagerProvider
  ]
})
export class AppModule { }
