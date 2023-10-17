import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { VendedorComponent } from './Components/usuarios/vendedor/vendedor.component';
import { VerflotaComponent } from './Components/flota/verflota/verflota.component';
import { RegistrarflotaComponent } from './Components/flota/registrarflota/registrarflota.component';


const routes: Routes = [

{path: '', redirectTo:'principal', pathMatch:'full'},
{path: 'principal',component:PrincipalComponent},
{path: 'pagos',component:PagosComponent},
{path: 'uvendedor',component:VendedorComponent},
{path: 'verflota',component:VerflotaComponent},
{path: 'registrarflota',component:RegistrarflotaComponent},
{path: '**', redirectTo:'principal', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
