import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ActaFinComponent } from './shared/acta-fin/acta-fin.component';
import { AltaUsuarioComponent } from './shared/alta-usuario/alta-usuario.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { PlaTrabajoComponent } from './shared/pla-trabajo/pla-trabajo.component';
import { SeguimientoComponent } from './shared/seguimiento/seguimiento.component';
import { SolInicioComponent } from './shared/sol-inicio/sol-inicio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
    {path: 'solicitudInicio', component: SolInicioComponent},
    {path: 'planTrabajo', component: PlaTrabajoComponent},
    {path: 'actaFin', component: ActaFinComponent},
    {path: 'login', component: LoginComponent},
    {path: 'altaUsuario', component: AltaUsuarioComponent},
    {path: 'seguimientos', component: SeguimientoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

