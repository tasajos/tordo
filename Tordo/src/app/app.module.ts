import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ContabilidadComponent } from './Components/contabilidad/contabilidad.component';
import { TicketPasajeComponent } from './Components/ticket-pasaje/ticket-pasaje.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { ContactosComponent } from './Components/contactos/contactos.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { FormbusComponent } from './Components/principal/formbus/formbus.component';
import { SlideComponent } from './Components/principal/slide/slide.component';
import { MenuComponent } from './Components/principal/menu/menu.component';
import { FooterComponent } from './Components/principal/footer/footer.component';
import { ResulbusquedaComponent } from './Components/principal/resulbusqueda/resulbusqueda.component';
import { VendedorComponent } from './Components/usuarios/vendedor/vendedor.component';
import { AdministradorComponent } from './Components/usuarios/administrador/administrador.component';
import { SuperusuarioComponent } from './Components/usuarios/superusuario/superusuario.component';
import { ContadorComponent } from './Components/usuarios/contador/contador.component';
import { SocioComponent } from './Components/usuarios/socio/socio.component';
import { FlotaComponent } from './Components/flota/flota.component';
import { RegistrarflotaComponent } from './Components/flota/registrarflota/registrarflota.component';
import { BuscarflotaComponent } from './Components/flota/buscarflota/buscarflota.component';
import { VerflotaComponent } from './Components/flota/verflota/verflota.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UsuariosComponent,
    ContabilidadComponent,
    TicketPasajeComponent,
    PagosComponent,
    ContactosComponent,
    CabeceraComponent,
    FormbusComponent,
    SlideComponent,
    MenuComponent,
    FooterComponent,
    ResulbusquedaComponent,
    VendedorComponent,
    AdministradorComponent,
    SuperusuarioComponent,
    ContadorComponent,
    SocioComponent,
    FlotaComponent,
    RegistrarflotaComponent,
    BuscarflotaComponent,
    VerflotaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
