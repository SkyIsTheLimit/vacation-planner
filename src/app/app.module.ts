import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DiscoveryProvider } from '../providers/discovery/discovery';
import { NotificationManagerProvider } from '../providers/notification-manager/notification-manager';
import { BookkeeperProvider } from '../providers/bookkeeper/bookkeeper';
import { FinancePlannerProvider } from '../providers/finance-planner/finance-planner';
import { CurrencyManagerProvider } from '../providers/currency-manager/currency-manager';
import { ExpenseLogProvider } from '../providers/expense-log/expense-log';
import { TravelCompanionProvider } from '../providers/travel-companion/travel-companion';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiscoveryProvider,
    NotificationManagerProvider,
    BookkeeperProvider,
    FinancePlannerProvider,
    CurrencyManagerProvider,
    ExpenseLogProvider,
    TravelCompanionProvider
  ]
})
export class AppModule {}
