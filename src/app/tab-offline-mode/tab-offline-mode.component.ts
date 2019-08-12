import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NetworkService} from '../services/network.service';
import {ApiService} from '../services/api.service';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-tab-offline-mode',
    templateUrl: './tab-offline-mode.component.html',
    styleUrls: ['./tab-offline-mode.component.scss']
})
export class TabOfflineModeComponent implements OnInit {

    signatures: any[];

    constructor(
        private storage: Storage,
        private networkService: NetworkService,
        private apiService: ApiService,
        private plt: Platform) {
    }

    ngOnInit() {
        this.plt.ready().then(() => {
            this.getSignatures();
        });
    }

    getSignatures() {
        this.apiService.getSignatures().subscribe((res) => {
            this.signatures = res;
        });
    }


}
