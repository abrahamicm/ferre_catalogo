import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TubosHpPageRoutingModule } from './tubos-hp-routing.module';

import { TubosHpPage } from './tubos-hp.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TubosHpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TubosHpPage]
})
export class TubosHpPageModule {}
