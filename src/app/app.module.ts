import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {
  DispatchPage,
  DiscoveryPage,
  UserProfilePage,
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
  OriginPickerPage,
  FlightDetailModalPage,
  HotelListPage,
  HotelDetailModalPage
} from '../pages';

import {
  DiscoveryProvider,
  BookkeeperProvider,
  CurrencyManagerProvider,
  NotificationManagerProvider,
  FinancePlannerProvider,
  TravelCompanionProvider,
  ExpenseLogProvider,
  TripManagerProvider,
  UserManagerProvider,
  DemoAuthenticationProvider,
  FlightManagerProvider,
  RestAuthenticationProvider,
  FacebookOAuthProvider,
  DataManagerProvider,
  ApiManagerProvider
} from '../providers';

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    TravelassistantPage,
    TravelcompanionPage,
    BookkeeperPage,
    UserProfilePage,
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
    OriginPickerPage,
    FlightDetailModalPage,
    HotelListPage,
    HotelDetailModalPage
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
    UserProfilePage,
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
    OriginPickerPage,
    FlightDetailModalPage,
    HotelListPage,
    HotelDetailModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    DiscoveryProvider,
    NotificationManagerProvider,
    BookkeeperProvider,
    FinancePlannerProvider,
    CurrencyManagerProvider,
    ExpenseLogProvider,
    TravelCompanionProvider,
    TripManagerProvider,
    UserManagerProvider,
    DemoAuthenticationProvider,
    FlightManagerProvider,
    RestAuthenticationProvider,
    FacebookOAuthProvider,
    DataManagerProvider,
    ApiManagerProvider
  ]
})
export class AppModule { }
