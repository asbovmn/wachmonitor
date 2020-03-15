import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import {rxStompConfig} from './rx-stomp.config';
import { FahrzeugRowComponent } from './components/fahrzeug-row/fahrzeug-row.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CallbackPipe } from './pipes/callback.pipe';
import { EinsatzComponent } from './components/einsatz/einsatz.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FahrzeugRowComponent,
    CallbackPipe,
    EinsatzComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot()
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: rxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
