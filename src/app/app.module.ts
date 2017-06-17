import { BrowserModule } from '@angular/platform-browser';
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
import { HomePage } from '../pages/home/home';
import { DiscoveryProvider } from '../providers/discovery/discovery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoveryPage,
    TravelassistantPage,
    BookkeeperPage,
    UserprofilePage,
    TabsPage
  ],
  imports: [
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiscoveryProvider
  ]
})
export class AppModule {}
