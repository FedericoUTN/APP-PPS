import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

formAltaUsuario: FormGroup;
user: Usuario = {legajo: '', password: '', nombre: '', apellido: '', email: '', dni: '',
 cellphone: '', localidad: '', direccion: '', cp: '', tipo: '' };
  constructor(private formBuilder: FormBuilder) {
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
  }

}
