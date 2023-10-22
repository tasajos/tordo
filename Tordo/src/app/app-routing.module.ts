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


const routes: Routes = [

{path: '', redirectTo:'principal', pathMatch:'full'},
{path: 'principal',component:PrincipalComponent},
{path: 'pagos',component:PagosComponent},
{path: 'uvendedor',component:VendedorComponent},
{path: 'verflota',component:VerflotaComponent},
{path: 'registrarflota',component:RegistrarflotaComponent},
{path: 'login',component:LoginComponent},
{path: 'recuperarlogin',component:RecuperarusuarioComponent},
{path: 'manifesto',component:ManifestoComponent},
{path: 'rrpasajero',component:RegistrarpasajeroComponent},
{path: 'ticketpasajero',component:TicketPasajeComponent},
{path: 'pasajeros-tabla/:count',component:LrpasajerosComponent},
{path: '**', redirectTo:'principal', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
