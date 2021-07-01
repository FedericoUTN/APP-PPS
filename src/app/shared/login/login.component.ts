import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../alta-usuario/usuario.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formLogin: FormGroup;
legajo = '';
pass = '';
usuario: Usuario = {legajo: '', pass: '', nombre: '', apellido: '', email: '', dni: '',
  cellphone: '', localidad: '', direccion: '', cp: '', tipo: '' };

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
this.formLogin = this.formBuilder.group({
  legajo: [''],
  password: ['']
});
   }

  ngOnInit(): void {
  }
  save(): void {
    this.usuarioService.seleccionarUsuario(this.legajo).subscribe(
      (result: any) => {
        this.usuario = (JSON.parse(result))[0];
        this.validar(this.usuario);
      }
    );
}
  validar(user: Usuario): void{
    if (user.legajo  === this.legajo && user.pass === this.pass){
      console.log('VALIDO!');

      this.usuarioService.usuarioLogueado = user;
    }
    else{
      console.log('INVALIDO');
    }
  }

}
