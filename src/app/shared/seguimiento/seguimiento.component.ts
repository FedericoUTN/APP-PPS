import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Seguimiento } from 'src/app/model/Seguimiento';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
formSeguimiento: FormGroup;
seguimiento: Seguimiento = {text1: '', text2: '', text3: '', text4: '', text5: ''};
  constructor(private formBuilder: FormBuilder) {
    this.formSeguimiento = this.formBuilder.group({
      text1: [''],
      text2: [''],
      text3: [''],
      text4: [''],
      text5: ['']
    });
   }

  ngOnInit(): void {
  }
enviar(): void{

}
}