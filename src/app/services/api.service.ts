import {Injectable} from '@angular/core';
import {from, Observable} from '../../../node_modules/inquirer/node_modules/rxjs';
import {ConnectionStatus, NetworkService} from './network.service';
import {Storage} from '@ionic/storage';
import {TabOfflineModeService} from '../tab-offline-mode/tab-offline-mode.service';

const API_STORAGE_KEY = 'specialkey';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private networkService: NetworkService, private storage: Storage, private offlineModeService: TabOfflineModeService) {
    }

    getSignatures(): Observable<any[]> {
        if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
            return from(this.getLocalData('signatures'));
        } else {
            // appel web service serveur pour récuper les signatures.
            /** Return real API data and store it locally
             //     return this.http.get(`${API_URL}/users?per_page=2&page=${page}`).pipe(
             //         map(res => res['data']),
             //         tap(res => {
        //             this.setLocalData('users', res);
        //         })**/
            //     )
            // }
        }
    }

    updateSignature(signature: any): Observable<any> {
        if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
            return from(this.offlineModeService.storeSignatures(signature));
        } else {
            // return this.http.put(url, data).pipe(
            //     catchError(err => {
            //         this.offlineModeService.storeRequest(signature);
            //         throw new Error(err);
            //     })
            // );
        }
    }

    // Get cached API result
    private getLocalData(key) {
        return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }
}
