import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdultPage } from '../pages/adult/adult';
import { UnderAgePage} from '../pages/under-age/under-age';
import { MessagePage } from '../pages/message/message';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MenuPage } from '../pages/menu/menu';
import { TabPage } from '../pages/tab/tab';
import {GmusikPage} from '../pages/gmusik/gmusik';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdultPage,
    UnderAgePage,
    MessagePage,
    AboutusPage,
    MenuPage,
    TabPage,
    GmusikPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdultPage,
    UnderAgePage,
    MessagePage,
    AboutusPage,
    MenuPage,
    TabPage,
    GmusikPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
