import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabillasPage } from './cabillas.page';

const routes: Routes = [
  {
    path: '',
    component: CabillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabillasPageRoutingModule {}
