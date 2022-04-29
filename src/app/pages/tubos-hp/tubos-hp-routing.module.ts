import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TubosHpPage } from './tubos-hp.page';

const routes: Routes = [
  {
    path: '',
    component: TubosHpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TubosHpPageRoutingModule {}
