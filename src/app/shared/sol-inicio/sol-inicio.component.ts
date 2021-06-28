import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/model/Empresa';
import { SolicitudInicio } from 'src/app/model/SolicitudInicio';
import { Usuario } from 'src/app/model/Usuario';
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

  constructor(private formBuilder: FormBuilder) {
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
      mailE: ['']

    });

  }
  ngOnInit(): void {
  }
  save(): void{

  }


}

