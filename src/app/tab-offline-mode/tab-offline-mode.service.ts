import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {forkJoin, from, Observable, of} from 'rxjs';
import {finalize, switchMap} from 'rxjs/operators';
import {Storage} from '@ionic/storage';

const STORAGE_REQ_KEY = 'storedreq';

@Injectable({
    providedIn: 'root'
})
export class TabOfflineModeService {

    constructor(private storage: Storage, private http: HttpClient, private toastController: ToastController) {
    }

    checkForEvents(): Observable<any> {
        return from(this.storage.get(STORAGE_REQ_KEY)).pipe(
            switchMap(storedOperations => {
                const storedObj = JSON.parse(storedOperations);
                if (storedObj && storedObj.length > 0) {
                    return this.sendSignatures(storedObj).pipe(
                        finalize(() => {
                            const toast = this.toastController.create({
                                message: `Synchronisation ok des données !`,
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.then(toastf => toastf.present());

                            this.storage.remove(STORAGE_REQ_KEY);
                        })
                    );
                } else {
                    console.log('no local events to sync');
                    return of(false);
                }
            })
        );
    }

    storeSignatures(signature: any) {
        return this.storage.get(STORAGE_REQ_KEY).then(storedOperations => {
            let storedObj = JSON.parse(storedOperations);

            if (storedObj) {
                storedObj.push(signature);
            } else {
                storedObj = [signature];
            }
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
