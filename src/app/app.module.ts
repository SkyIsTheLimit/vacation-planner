import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { MyApp } from './app.component';

import {
  DispatchPage,
  DiscoveryPage,
  UserProfilePage,
  TravelassistantPage,
  TravelcompanionPage,
  TravelcompaniondetailPage,
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
  HotelDetailModalPage,
  TripComparisonPage
} from '../pages';

import {
  DiscoveryProvider,
  TravelCompanionProvider,
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
    TravelcompaniondetailPage,
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
    HotelDetailModalPage,
    TripComparisonPage
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
    TravelcompaniondetailPage,
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
    HotelDetailModalPage,
    TripComparisonPage
  ],
  providers: [
    AndroidPermissions,
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    DiscoveryProvider,
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
