import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../alta-usuario/usuario.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  usuario: Usuario = {legajo: '', pass: '', nombre: '', apellido: '', email: '', dni: '',
  cellphone: '', localidad: '', direccion: '', cp: '', tipo: '' };
  formEditUsuario: FormGroup;
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.formEditUsuario = this.formBuilder.group({
      legajo: [''],
      pass: [''],
      nombre: [''],
      apellido: [''],
      email: [''],
      dni: [''],
      cellphone: [''],
      localidad: [''],
      direccion: [''],
      cp: [''],
      tipo: ['']

    });
   }

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
    seleccionarUsuario(legajo: string): void {
      this.usuarioService.seleccionarUsuario(legajo).subscribe(
        (result: any) => this.usuario = (JSON.parse(result))[0]
      );
    }
    editarUsuario(): void {
      this.usuarioService.editarUsuario(this.usuario).subscribe(
        (        datos: { resultado: string; mensaje: any; }) => {
          if (datos.resultado === 'OK') {
            alert(datos.mensaje);
            this.mostrarUsuarios();
          }
        }
      );
    }
}
