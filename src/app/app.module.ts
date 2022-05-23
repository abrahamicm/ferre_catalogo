import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './store/app.state';
import { SedesEffects } from './store/effects/sedes.effects';


// cambiar la estructura de carpetas en la tienda

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule,
    StoreModule.forRoot(
      ROOT_REDUCER
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SedesEffects]),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js',

      {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000'
      })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CallNumber],
  bootstrap: [AppComponent],
})
export class AppModule { }
