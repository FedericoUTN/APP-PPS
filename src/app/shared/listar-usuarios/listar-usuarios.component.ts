import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../alta-usuario/usuario.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }
  mostrarUsuarios(): void{
    this.usuarioService.getAllUsuarios().subscribe(
      (      result: any ) => {

        this.usuarios = JSON.parse(result);


      }
    );
    }
    bajaUsuario(legajo: string): void {
      this.usuarioService.deleteUsuario(legajo).subscribe(
        (        datos: { [x: string]: any; }) => {
          if (datos.resultado === 'OK') {
            alert(datos.mensaje);
            console.log('Usuario borrado');
          }
        }
      );
    }
}
