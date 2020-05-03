import { NgModule } from '@angular/core';
import { NetworkAlertComponent } from './network-alert.component';
import { DynamicDomInjectorModule } from '@acharyarajasekhar/dynamic-dom-injector';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NetworkAlertComponent],
  imports: [
    CommonModule,
    DynamicDomInjectorModule
  ],
  exports: [NetworkAlertComponent],
  entryComponents: [NetworkAlertComponent]
})
export class NetworkAlertModule { }
