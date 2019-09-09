import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

const API_STORAGE_KEY = 'specialkey';

@Injectable({
    providedIn: 'root'
})
export class StorageManagerService {

    constructor(private storage: Storage) {
    }


    // Les données sont récupérèes en mode hors ligne dans le cache d'lindexe IndexedDB.
    getLocalData(key) {
        return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }

    /**
     * Au première appel de la récupération des users, on les stock dans une table IndexedDB, pour que meme en mode hors lignes
     * on puisse les récupèrer.
     * A la création d'un utilisateur en mode hors ligne, on stock cet utilisateur dans cette indexe.
     *
     * @param key, clef de stockage.
     * @param data, donnée à stocker.
     * @returns {Promise<any>}
     */
    setLocalData(key, data) {
        return this.storage.get(`${API_STORAGE_KEY}-${key}`).then(storedData => {
            if (storedData) {
                storedData.push(data);
            } else {
                storedData = [data];
            }
            return this.storage.set(`${API_STORAGE_KEY}-${key}`, storedData);
        });
    }

    emptyStorage(key) {
        this.storage.remove(`${API_STORAGE_KEY}-${key}`);
    }
}

