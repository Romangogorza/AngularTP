import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaHelados } from './lista-helados/lista-helados';
import { Contacto } from './contacto/contacto';
import { Botones } from './botones/botones';
import { Carrito } from './carrito/carrito';

@NgModule({
  declarations: [
    App,
    ListaHelados,
    Contacto,
    Botones,
    Carrito
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
