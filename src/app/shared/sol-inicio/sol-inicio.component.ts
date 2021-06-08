import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sol-inicio',
  templateUrl: './sol-inicio.component.html',
  styleUrls: ['./sol-inicio.component.css']
})
export class SolInicioComponent implements OnInit {
  formSolicitud: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.formSolicitud = this.formBuilder.group({

    });
  }
  ngOnInit(): void {
  }
  save(): void{

  }


}

