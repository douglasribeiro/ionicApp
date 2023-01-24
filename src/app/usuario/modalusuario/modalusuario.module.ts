import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalusuarioPageRoutingModule } from './modalusuario-routing.module';

import { ModalusuarioPage } from './modalusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalusuarioPageRoutingModule
  ],
  declarations: [ModalusuarioPage]
})
export class ModalusuarioPageModule {}
