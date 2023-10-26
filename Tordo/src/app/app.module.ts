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
import { LoginComponent } from './Components/login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecuperarusuarioComponent } from './Components/login/recuperarusuario/recuperarusuario.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



//modulos
import {AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { MvendedorComponent } from './Components/principal/menu/mvendedor/mvendedor.component';
import { PasajerosComponent } from './Components/pasajeros/pasajeros.component';
import { ManifestoComponent } from './Components/pasajeros/manifesto/manifesto.component';
import { RegistrarpasajeroComponent } from './Components/pasajeros/registrarpasajero/registrarpasajero.component';
import { ToastrModule } from 'ngx-toastr';
import { LrpasajerosComponent } from './Components/pasajeros/lrpasajeros/lrpasajeros.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { VentapasajeComponent } from './Components/ventas/ventapasaje/ventapasaje.component';
import { ReservapasajeComponent } from './Components/ventas/reservapasaje/reservapasaje.component';
import { MflotaComponent } from './Components/pasajeros/manifesto/mflota/mflota.component';


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
    VerflotaComponent,
    LoginComponent,
    SpinnerComponent,
    RecuperarusuarioComponent,
    MvendedorComponent,
    PasajerosComponent,
    ManifestoComponent,
    RegistrarpasajeroComponent,
    LrpasajerosComponent,
    VentasComponent,
    VentapasajeComponent,
    ReservapasajeComponent,
    MflotaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
