import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {StorageManagerService} from '../services/storage-manager.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab-flash-code-barre.page.html',
    styleUrls: ['tab-flash-code-barre.page.scss']
})
export class TabFlashCodeBarrePage implements OnInit {
    codesBars: any;

    constructor(public photoService: PhotoService,
                private barcodeScanner: BarcodeScanner,
                private storageService: StorageManagerService) {
    }

    ngOnInit() {
        this.photoService.loadSaved();
        this.openBarCodeScanner();
    }

    ionViewDidEnter() {
        this.getCodeBarsStored();
    }

    openBarCodeScanner() {
        this.barcodeScanner.scan().then(barcodeData => {
            const codeBarre = {
                numCb: barcodeData.text,
                dateScan: new Date()
            };
            console.log('Barcode data', codeBarre);
            this.storageService.setLocalData('barcodeData', codeBarre).then(() => {
                this.getCodeBarsStored();
            });
        }).catch(err => {
            console.log('Error', err);
        });
    }

    getCodeBarsStored() {
        this.storageService.getLocalData('barcodeData').then((data) => {
            this.codesBars = data;
        });
    }
}
