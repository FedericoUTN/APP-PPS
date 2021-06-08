import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';
@Component({
  selector: 'app-sol-inicio',
  templateUrl: './sol-inicio.component.html',
  styleUrls: ['./sol-inicio.component.css']
})
export class SolInicioComponent implements OnInit {
  formSolicitud: FormGroup;
  user: Usuario = {legajo: '', password: '', nombre: '', apellido: '', email: '', dni: '', cellphone: '', localidad: '', direccion: '', cp: '' };


  constructor(private formBuilder: FormBuilder) {
    this.formSolicitud = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      legajo: [''],
      dni: [''],
      direccion: [''],
      localidad: [''],
      cellphone: [''],
      cp: ['']

    });
  }
  ngOnInit(): void {
  }
  save(): void{

  }


}

