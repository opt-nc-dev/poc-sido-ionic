import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TabSignaturePage} from './tab-signature.page';
import {SignaturePadModule} from 'angular2-signaturepad';

@NgModule({
    imports: [
        SignaturePadModule,
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: TabSignaturePage}])
    ],
    declarations: [TabSignaturePage]
})
export class Tab3PageModule {
}
