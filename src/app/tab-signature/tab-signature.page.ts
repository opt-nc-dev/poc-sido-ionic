import {Component, ViewChild} from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {NavController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab-signature.page.html',
    styleUrls: ['tab-signature.page.scss']
})
export class TabSignaturePage {
    signature = '';
    isDrawing = false;

    constructor(public navController: NavController, public storage: Storage, public toastCtrl: ToastController) {
    }

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    private signaturePadOptions = { // Check out https://github.com/szimek/signature_pad
        'minWidth': 2,
        'canvasWidth': 400,
        'canvasHeight': 200,
        'backgroundColor': '#f6fbff',
        'penColor': '#666a73'
    };

    ionViewDidEnter() {
        this.signaturePad.clear();
        this.storage.get('savedSignature').then((data) => {
            this.signature = data;
        });
    }

    drawComplete() {
        this.isDrawing = false;
    }

    drawStart() {
        this.isDrawing = true;
    }

    async savePad() {
        this.signature = this.signaturePad.toDataURL();
        this.storage.set('savedSignature', this.signature);
        this.signaturePad.clear();
        const toast = await this.toastCtrl.create({
            message: 'Nouvelle signature enregistrée',
            duration: 3000
        });
        toast.present();
    }

    clearPad() {
        this.signaturePad.clear();
    }


}
