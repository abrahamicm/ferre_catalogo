import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigasPage } from './vigas.page';

const routes: Routes = [
  {
    path: '',
    component: VigasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigasPageRoutingModule {}
