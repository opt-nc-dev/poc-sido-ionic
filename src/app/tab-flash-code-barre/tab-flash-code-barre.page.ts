import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab-flash-code-barre.page.html',
    styleUrls: ['tab-flash-code-barre.page.scss']
})
export class TabFlashCodeBarrePage implements OnInit {
    currentImage: any;

    constructor(public photoService: PhotoService,
                private barcodeScanner: BarcodeScanner) {
    }

    ngOnInit() {
        this.photoService.loadSaved();
        this.openBarCodeScanner();
    }

    openBarCodeScanner() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }
}
