import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ConnectionStatus, NetworkService} from './services/network.service';
import {TabOfflineModeService} from './tab-offline-mode/tab-offline-mode.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private networkService: NetworkService,
        private offlineService: TabOfflineModeService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
                // On regarde les evenements stockés quand on revient en mode onLine.
                if (status === ConnectionStatus.Online) {
                    this.offlineService.checkForEvents().subscribe();
                }
            });
        });
    }
}
