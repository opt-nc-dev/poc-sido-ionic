import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Camera} from '@ionic-native/camera/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HttpClientModule} from '@angular/common/http';
import {Network} from '@ionic-native/network/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        BarcodeScanner,
        Geolocation,
        StatusBar,
        SplashScreen,
        Camera,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        Network
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
