import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PlaTrabajoComponent } from './shared/pla-trabajo/pla-trabajo.component';
import { SolInicioComponent } from './shared/sol-inicio/sol-inicio.component';

import {ReactiveFormsModule} from '@angular/forms';
import { ActaFinComponent } from './shared/acta-fin/acta-fin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { AltaUsuarioComponent } from './shared/alta-usuario/alta-usuario.component';
import { LoginComponent } from './shared/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SeguimientoComponent } from './shared/seguimiento/seguimiento.component';
import { ListarUsuariosComponent } from './shared/listar-usuarios/listar-usuarios.component';
import { UsuarioService } from './shared/alta-usuario/usuario.service';
import { LoginService } from './shared/login/login.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PlaTrabajoComponent,
    SolInicioComponent,
    ActaFinComponent,
    AltaUsuarioComponent,
    LoginComponent,
    SeguimientoComponent,
    ListarUsuariosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
