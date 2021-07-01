import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../alta-usuario/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notification: number;
  nombreUsuario = '';
  constructor( private router: Router, private usuarioService: UsuarioService) {
    this.notification = 1;
  }

  ngOnInit(): void {
    this.nombreUsuario = this.usuarioService.usuarioLogueado.nombre;
    if (this.nombreUsuario === ''){
      this.nombreUsuario = 'Loguearse';
    }
  }
  /*Perfil(): any{
     if (this.usuarioService.isNullUser())
    {
      console.log('login in');
      this.router.navigate(['../login']);
    }
  }*/

}
