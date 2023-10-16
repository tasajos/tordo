import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ContabilidadComponent } from './Components/contabilidad/contabilidad.component';
import { TicketPasajeComponent } from './Components/ticket-pasaje/ticket-pasaje.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { ContactosComponent } from './Components/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UsuariosComponent,
    ContabilidadComponent,
    TicketPasajeComponent,
    PagosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
