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


const routes: Routes = [

{path: '', redirectTo:'login', pathMatch:'full'},
{path: 'principal',component:PrincipalComponent},
{path: 'pagos',component:PagosComponent},
{path: 'uvendedor',component:VendedorComponent},
{path: 'uadministrador',component:AdministradorComponent},
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
{path: '**', redirectTo:'login', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
