import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { VendedorComponent } from './Components/usuarios/vendedor/vendedor.component';
import { VerflotaComponent } from './Components/flota/verflota/verflota.component';
import { RegistrarflotaComponent } from './Components/flota/registrarflota/registrarflota.component';
import { LoginComponent } from './Components/login/login.component';
import { RecuperarusuarioComponent } from './Components/login/recuperarusuario/recuperarusuario.component';
import { ManifestoComponent } from './Components/pasajeros/manifesto/manifesto.component';
import { RegistrarpasajeroComponent } from './Components/pasajeros/registrarpasajero/registrarpasajero.component';
import { TicketPasajeComponent } from './Components/ticket-pasaje/ticket-pasaje.component';
import { LrpasajerosComponent } from './Components/pasajeros/lrpasajeros/lrpasajeros.component';
import { ReservapasajeComponent } from './Components/ventas/reservapasaje/reservapasaje.component';
import { MflotaComponent } from './Components/pasajeros/manifesto/mflota/mflota.component';
import { FmanifestoComponent } from './Components/pasajeros/manifesto/fmanifesto/fmanifesto.component';
import { AdministradorComponent } from './Components/usuarios/administrador/administrador.component';
import { AdmanifestogralComponent } from './Components/usuarios/administrador/admanifesto/admanifestogral/admanifestogral.component';
import { AdmanifestoflotaComponent } from './Components/usuarios/administrador/admanifesto/admanifestoflota/admanifestoflota.component';
import { AdmanifestofechaComponent } from './Components/usuarios/administrador/admanifesto/admanifestofecha/admanifestofecha.component';
import { AdverflotasComponent } from './Components/usuarios/administrador/adflotas/adverflotas/adverflotas.component';
import { AdregistrarflotasComponent } from './Components/usuarios/administrador/adflotas/adregistrarflotas/adregistrarflotas.component';
import { AdlistflotaComponent } from './Components/usuarios/administrador/adflotas/adlistflota/adlistflota.component';
import { VentapasajeComponent } from './Components/ventas/ventapasaje/ventapasaje.component';
import { VdiariasComponent } from './Components/ventas/vdiarias/vdiarias.component';
import { CantpasajerosComponent } from './Components/pasajeros/cantpasajeros/cantpasajeros.component';
import { NovedadesComponent } from './Components/libronovedades/novedades/novedades.component';
import { CostosComponent } from './Components/costos/costos.component';
import { CostosoperacionalesComponent } from './Components/costos/costosoperacionales/costosoperacionales.component';
import { ListascopComponent } from './Components/costos/costosoperacionales/listascop/listascop.component';
import { TotcostosfijosComponent } from './Components/costos/costosoperacionales/listascop/totcostosfijos/totcostosfijos.component';
import { TotcostosvariablesComponent } from './Components/costos/costosoperacionales/listascop/totcostosvariables/totcostosvariables.component';
import { DifoperacionComponent } from './Components/costos/costosoperacionales/difoperacion/difoperacion.component';
import { ContabilidadComponent } from './Components/contabilidad/contabilidad.component';
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
import { SuperusuarioComponent } from './Components/usuarios/superusuario/superusuario.component';


const routes: Routes = [

{path: '', redirectTo:'login', pathMatch:'full'},
{path: 'principal',component:PrincipalComponent},
{path: 'pagos',component:PagosComponent},
{path: 'uvendedor',component:VendedorComponent},
{path: 'uadministrador',component:AdministradorComponent},
{path: 'usuperusuario',component:SuperusuarioComponent},
{path: 'verflota',component:RegistrarpasajeroComponent},
{path: 'registrarflota',component:RegistrarflotaComponent},
{path: 'login',component:LoginComponent},
{path: 'recuperarlogin',component:RecuperarusuarioComponent},
{path: 'manifesto',component:ManifestoComponent},
{path: 'admanifesto',component:AdmanifestogralComponent},
{path: 'mflota',component:MflotaComponent},
{path: 'admanifestoflota',component:AdmanifestoflotaComponent},
{path: 'rrpasajero',component:RegistrarpasajeroComponent},
{path: 'ticketpasajero',component:TicketPasajeComponent},
{path: 'reservapasaje',component:ReservapasajeComponent},
{path: 'mfecha',component:FmanifestoComponent},
{path: 'admfecha',component:AdmanifestofechaComponent},
{path: 'adverflota',component:AdverflotasComponent},
{path: 'adregflota',component:AdregistrarflotasComponent},
{path: 'pasajeros-tabla/:count',component:LrpasajerosComponent},
{path: 'lpasajeros-tabla/:count',component:AdlistflotaComponent},
{path: 'rventapasaje',component:VentapasajeComponent},
{path: 'vdiaria',component:VdiariasComponent},
{path: 'cpasajeros',component:CantpasajerosComponent},
{path: 'regnovedades',component:NovedadesComponent},
{path: 'costos',component:CostosComponent},
{path: 'costosoperacionales',component:CostosoperacionalesComponent},
{path: 'listacostoop',component:ListascopComponent},
{path: 'tcostofijo',component:TotcostosfijosComponent},
{path: 'tcostovariable',component:TotcostosvariablesComponent},
{path: 'difoperacion',component:DifoperacionComponent},
{path: 'contabilidad',component:ContabilidadComponent},
{path: 'cactivo',component:CactivosComponent},
{path: 'cpasivo',component:CpasivoComponent},
{path: 'cpatrimonio',component:CpatrimonioComponent},
{path: 'cingresos',component:CingresosComponent},
{path: 'cegresos',component:CegresosComponent},
{path: 'cmtto',component:MttoComponent},
{path: 'cmttop',component:MttopasivoComponent},
{path: 'cmttopat',component:MttopatrimonioComponent},
{path: 'cmttoing',component:MttoingresoComponent},
{path: 'cmttoegr',component:MttoegresoComponent},
{path: 'estadofi',component:EstadofinanzasComponent},

{path: '**', redirectTo:'login', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
