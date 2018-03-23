import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusicService } from '../providers/music/music';
import { HttpClientModule } from '@angular/common/http';
import { Media } from '@ionic-native/media';
import { SearchComponent } from '../components/search/search';
import { SpotTracksProvider } from '../providers/spot-tracks/spot-tracks';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchComponent
  ],
  providers: [
    StatusBar,
    Media,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicService,
    SpotTracksProvider
  ]
})
export class AppModule {}
