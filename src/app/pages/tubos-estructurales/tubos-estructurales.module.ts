import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TubosEstructuralesPageRoutingModule } from './tubos-estructurales-routing.module';

import { TubosEstructuralesPage } from './tubos-estructurales.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TubosEstructuralesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TubosEstructuralesPage]
})
export class TubosEstructuralesPageModule {}
