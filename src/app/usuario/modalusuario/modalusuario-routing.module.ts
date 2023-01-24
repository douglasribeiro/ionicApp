import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalusuarioPage } from './modalusuario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalusuarioPageRoutingModule {}
