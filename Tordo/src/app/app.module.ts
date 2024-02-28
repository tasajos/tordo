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

import { LrpasajerosComponent } from './Components/pasajeros/lrpasajeros/lrpasajeros.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { VentapasajeComponent } from './Components/ventas/ventapasaje/ventapasaje.component';
import { ReservapasajeComponent } from './Components/ventas/reservapasaje/reservapasaje.component';
import { MflotaComponent } from './Components/pasajeros/manifesto/mflota/mflota.component';
import { FmanifestoComponent } from './Components/pasajeros/manifesto/fmanifesto/fmanifesto.component';
import { MadministradorComponent } from './Components/principal/menu/madministrador/madministrador.component';
import { VpasajeonlineComponent } from './Components/ventas/reservapasaje/vpasajeonline/vpasajeonline.component';
import { AdmanifestoflotaComponent } from './Components/usuarios/administrador/admanifesto/admanifestoflota/admanifestoflota.component';
import { AdmanifestofechaComponent } from './Components/usuarios/administrador/admanifesto/admanifestofecha/admanifestofecha.component';
import { AdmanifestogralComponent } from './Components/usuarios/administrador/admanifesto/admanifestogral/admanifestogral.component';
import { MvendedorComponent } from './Components/principal/menu/mvendedor/mvendedor.component';
import { PasajerosComponent } from './Components/pasajeros/pasajeros.component';
import { ManifestoComponent } from './Components/pasajeros/manifesto/manifesto.component';
import { RegistrarpasajeroComponent } from './Components/pasajeros/registrarpasajero/registrarpasajero.component';


//modulos
import {AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
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
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { saveAs } from 'file-saver';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { AdverflotasComponent } from './Components/usuarios/administrador/adflotas/adverflotas/adverflotas.component';
import { AdregistrarflotasComponent } from './Components/usuarios/administrador/adflotas/adregistrarflotas/adregistrarflotas.component';
import { AdlistflotaComponent } from './Components/usuarios/administrador/adflotas/adlistflota/adlistflota.component';
import { VdiariasComponent } from './Components/ventas/vdiarias/vdiarias.component';
import { CantpasajerosComponent } from './Components/pasajeros/cantpasajeros/cantpasajeros.component';
import { NovedadesComponent } from './Components/libronovedades/novedades/novedades.component';
import { ListanovedadesComponent } from './Components/libronovedades/listanovedades/listanovedades.component';
import { CostosComponent } from './Components/costos/costos.component';
import { CostosoperacionalesComponent } from './Components/costos/costosoperacionales/costosoperacionales.component';
import { ListascopComponent } from './Components/costos/costosoperacionales/listascop/listascop.component';
import { TotcostosfijosComponent } from './Components/costos/costosoperacionales/listascop/totcostosfijos/totcostosfijos.component';
import { TotcostosvariablesComponent } from './Components/costos/costosoperacionales/listascop/totcostosvariables/totcostosvariables.component';
import { DifoperacionComponent } from './Components/costos/costosoperacionales/difoperacion/difoperacion.component';
import { CactivosComponent } from './Components/contabilidad/cactivos/cactivos.component';
import { CpasivoComponent } from './Components/contabilidad/cpasivo/cpasivo.component';
import { CpatrimonioComponent } from './Components/contabilidad/cpatrimonio/cpatrimonio.component';
import { CingresosComponent } from './Components/contabilidad/cingresos/cingresos.component';
import { CegresosComponent } from './Components/contabilidad/cegresos/cegresos.component';
import { MttoComponent } from './Components/contabilidad/mtto/mtto.component';
import { MttopasivoComponent } from './Components/contabilidad/mtto/mttopasivo/mttopasivo.component';
import { MttopatrimonioComponent } from './Components/contabilidad/mtto/mttopatrimonio/mttopatrimonio.component';
import { MttoingresoComponent } from './Components/contabilidad/mtto/mttoingreso/mttoingreso.component';
import { MttoegresoComponent } from './Components/contabilidad/mtto/mttoegreso/mttoegreso.component';
import { EstadofinanzasComponent } from './Components/contabilidad/estadofinanzas/estadofinanzas.component';
import { ReleasesTComponent } from './Components/releases-t/releases-t.component';
import { MenusuperusuarioComponent } from './Components/usuarios/superusuario/menusuperusuario/menusuperusuario.component';
import { Menu2sliderComponent } from './Components/usuarios/superusuario/menu2slider/menu2slider.component';
import { SureporteComponent } from './Components/Reportes/sureporte/sureporte.component';
import { RegemprComponent } from './Components/Empresas/regempr/regempr.component';
import { GuusuarioComponent } from './Components/GestionUsuario/guusuario/guusuario.component';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
    MflotaComponent,
    FmanifestoComponent,
    MadministradorComponent,
    VpasajeonlineComponent,
    AdmanifestoflotaComponent,
    AdmanifestofechaComponent,
    AdmanifestogralComponent,
    AdverflotasComponent,
    AdregistrarflotasComponent,
    AdlistflotaComponent,
    VdiariasComponent,
    CantpasajerosComponent,
    NovedadesComponent,
    ListanovedadesComponent,
    CostosComponent,
    CostosoperacionalesComponent,
    ListascopComponent,
    TotcostosfijosComponent,
    TotcostosvariablesComponent,
    DifoperacionComponent,
    CactivosComponent,
    CpasivoComponent,
    CpatrimonioComponent,
    CingresosComponent,
    CegresosComponent,
    MttoComponent,
    MttopasivoComponent,
    MttopatrimonioComponent,
    MttoingresoComponent,
    MttoegresoComponent,
    EstadofinanzasComponent,
    ReleasesTComponent,
    MenusuperusuarioComponent,
    Menu2sliderComponent,
    SureporteComponent,
    RegemprComponent,
    GuusuarioComponent
    
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
    MatNativeDateModule,
    MatDatepickerModule,
    NgFor,
    MatSelectModule,
    AngularFireDatabaseModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatCheckboxModule,
    
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
   
  ],
  providers: [ { provide: MAT_DATE_LOCALE, useValue: 'es' },
  { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },],
  bootstrap: [AppComponent]
})
export class AppModule { }
