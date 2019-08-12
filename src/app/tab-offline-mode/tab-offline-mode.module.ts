import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabOfflineModeComponent} from './tab-offline-mode.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: TabOfflineModeComponent}])
    ],
    declarations: [TabOfflineModeComponent]
})
export class TabOfflineModeModule {
}
