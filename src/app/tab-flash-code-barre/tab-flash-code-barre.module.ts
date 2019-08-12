import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabFlashCodeBarrePage } from './tab-flash-code-barre.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabFlashCodeBarrePage }])
  ],
  declarations: [TabFlashCodeBarrePage]
})
export class Tab2PageModule {}
