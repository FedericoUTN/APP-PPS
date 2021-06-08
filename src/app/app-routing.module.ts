import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ActaFinComponent } from './shared/acta-fin/acta-fin.component';
import { HomeComponent } from './shared/home/home.component';
import { PlaTrabajoComponent } from './shared/pla-trabajo/pla-trabajo.component';
import { SolInicioComponent } from './shared/sol-inicio/sol-inicio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
    {path: 'solicitudInicio', component: SolInicioComponent},
    {path: 'planTrabajo', component: PlaTrabajoComponent},
    {path: 'actaFin', component: ActaFinComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

