import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaminasPage } from './laminas.page';

const routes: Routes = [
  {
    path: '',
    component: LaminasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaminasPageRoutingModule {}
