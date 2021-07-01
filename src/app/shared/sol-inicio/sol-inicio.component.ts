import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/model/Empresa';
import { SolicitudInicio } from 'src/app/model/SolicitudInicio';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../alta-usuario/usuario.service';
import { SolicitudService } from './solicitud.service';
@Component({
  selector: 'app-sol-inicio',
  templateUrl: './sol-inicio.component.html',
  styleUrls: ['./sol-inicio.component.css']
})
export class SolInicioComponent implements OnInit {
  formSolicitud: FormGroup;
  user: Usuario = {legajo: '', pass: '', nombre: '', apellido: '', email: '', dni: '', cellphone: '',
  localidad: '', direccion: '', cp: '', tipo: '' };
  nullDate = new Date(0);
  solicitud: SolicitudInicio = {fechaIncial: this.nullDate, caracteristicas: '', docenteTutor: ''};
  empresa: Empresa = {nombre: '', direccion: '', localidad: '', telefono: '', codigoPostal: '', email: '', personaContacto: ''};

  constructor(private formBuilder: FormBuilder, private solicitudService: SolicitudService, private usuarioService: UsuarioService) {
    this.formSolicitud = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: [''],
      legajo: [''],
      dni: [''],
      direccion: [''],
      localidad: [''],
      cellphone: [''],
      cp: [''],
      fechaC: [''],
      caracteristicas: [''],
      docenteTutor: [''],
      nombreE: [''],
      localidadE: [''],
      direccionE: [''],
      cpE: [''],
      telefonoE: [''],
      personaContacto: [''],
      emailE: ['']

    });

  }
  ngOnInit(): void {
  }
  save(): void{
    this.altaSolicitud();
    this.altaEmpresa();
    this.altaUsuario();
    console.log('solicitud creada');

  }
  altaSolicitud(): any{
    let actualSol = new SolicitudInicio( this.nullDate, '',  '');
    actualSol = Object.assign({}, this.solicitud);
    this.solicitudService.createSolicitudInicio(actualSol).subscribe(
      (datos: { resultado: string; mensaje: any; }) => {
        if (datos.resultado === 'OK'){
          alert(datos.mensaje);
        }
      }
    );
  }
  altaEmpresa(): any{
    let actualEmp = new Empresa( '', '',  '',  '',  '',  '',  '');
    actualEmp = Object.assign({}, this.empresa);
    this.solicitudService.createEmpresa(actualEmp).subscribe(
      (datos: { resultado: string; mensaje: any; }) => {
        if (datos.resultado === 'OK'){
          alert(datos.mensaje);
        }
      }
    );
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

