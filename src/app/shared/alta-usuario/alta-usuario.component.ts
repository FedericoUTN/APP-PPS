import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

formAltaUsuario: FormGroup;
user: Usuario = {legajo: '', pass: '', nombre: '', apellido: '', email: '', dni: '',
 cellphone: '', localidad: '', direccion: '', cp: '', tipo: '' };
 usuarios: Array<Usuario> = [];
isValid = false;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formAltaUsuario = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      legajo: [''],
      email: [''],
      contraseña: [''],
      tipo: ['']

    });
   }

  ngOnInit(): void {


  }
  save(): void {
  console.log(this.user);
  this.altaUsuario();
  this.isValid = !this.isValid;
  }

  altaUsuario(): any{
    let actualUser = new Usuario('', '',  '',  '', '',  '',
     '', '', '', '', '');
    actualUser = Object.assign({}, this.user);
    this.usuarioService.createUsuario(actualUser).subscribe( (datos: { resultado: string; mensaje: any; }) => {
        if (datos.resultado === 'OK'){
          alert(datos.mensaje);
        }
      }
    );
  }


}
