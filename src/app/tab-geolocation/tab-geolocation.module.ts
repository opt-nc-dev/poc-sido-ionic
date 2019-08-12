import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TabGeolocationPage} from './tab-geolocation.page';
import {OptAngularEsrimapModule} from 'opt-angular-esrimap';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        OptAngularEsrimapModule,
        RouterModule.forChild([{path: '', component: TabGeolocationPage}])
    ],
    declarations: [TabGeolocationPage],
    exports: [OptAngularEsrimapModule]
})
export class Tab1PageModule {
}
