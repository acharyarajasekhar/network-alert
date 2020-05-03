import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetworkAlertModule } from 'projects/network-alert/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NetworkAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
