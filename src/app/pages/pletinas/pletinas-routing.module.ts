import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PletinasPage } from './pletinas.page';

const routes: Routes = [
  {
    path: '',
    component: PletinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PletinasPageRoutingModule {}
