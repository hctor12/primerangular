import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../components/primer-component/primer-component';
import { HooksAngular } from '../components/hooksangular-component/hooksangular-component';
import DeportesComponent from '../components/deportes-component/deportes-component';
import DeportesV2Component from '../components/deportesv2-component/deportesv2-component';
import { FormsModule } from '@angular/forms';
import FormBinding from '../components/formbinding-component/formbinding-component';
import SumarNumeros from '../components/sumarnumeros-component/sumarnumeros-component';
import TablaMultiplicar from '../components/tabla-multiplicar-component/tabla-multiplicar-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    DeportesV2Component,
    FormBinding,
    SumarNumeros,
    TablaMultiplicar,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
