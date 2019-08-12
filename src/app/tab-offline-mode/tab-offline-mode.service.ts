import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';

const STORAGE_REQ_KEY = 'storedreq';

@Injectable({
    providedIn: 'root'
})
export class TabOfflineModeService {

    constructor(private storage: Storage, private http: HttpClient, private toastController: ToastController) {
    }

    storeSignatures(signature: any) {
        return this.storage.get(STORAGE_REQ_KEY).then(storedOperations => {
            let storedObj = JSON.parse(storedOperations);

            if (storedObj) {
                storedObj.push(signature);
            } else {
                storedObj = [signature];
            }
            // Save old & new local transactions back to Storage
            return this.storage.set(STORAGE_REQ_KEY, JSON.stringify(storedObj));
        });
    }

    sendSignatures(signatures: any[]) {
        const obs = [];
        for (const sign of signatures) {
            obs.push(sign);
        }
        return forkJoin(obs);
    }
}
