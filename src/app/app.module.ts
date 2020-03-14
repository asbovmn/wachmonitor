import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import {rxStompConfig} from './rx-stomp.config';
import { FahrzeugComponent } from './components/fahrzeug/fahrzeug.component';
import { FahrzeugRowComponent } from './components/fahrzeug-row/fahrzeug-row.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CallbackPipe } from './pipes/callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FahrzeugComponent,
    FahrzeugRowComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
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
