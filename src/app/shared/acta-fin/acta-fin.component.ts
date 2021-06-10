import { Component, OnInit } from '@angular/core';
import { ActaFinalizacion, opc1, opc2} from 'src/app/model/ActaFinalizacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acta-fin',
  templateUrl: './acta-fin.component.html',
  styleUrls: ['./acta-fin.component.css']
})
export class ActaFinComponent implements OnInit {

  actFin: ActaFinalizacion = {
    op1 : opc1.excelente,
    op2 : opc2.bastante,
    op3 : opc2.bastante,
    op4 : opc1.excelente,
    op5 : opc1.excelente,
    op6 : opc1.excelente,
    text1 : '',
    text2 : '',
    text3 : '',
    text4 : '',
    text5 : '',
    cita : false,
    revision : false,
    tutor: false};

    formActaFin: FormGroup;

  opc1: Array<string> = ['excelente', 'buena', 'regular', 'mala'];
  opc2: Array<string> = ['mucho', 'bastante', 'poco', 'nada'];

  constructor(private formBuilder: FormBuilder) {
    this.formActaFin = this.formBuilder.group({
      op1: [''],
      op2: [''],
      op3: [''],
      op4: [''],
      op5: [''],
      op6: [''],
      text1: [''],
      text2: [''],
      text3: [''],
      text4: [''],
      text5: [''],
      cita: [''],
      revision: [''],
      tutor: ['']
    });

   }

  ngOnInit(): void {
  }
  enviar(): void{
    console.log(this.actFin);
  }
/*save(){
console.log(this.forma);
if (this.forma.invalid){
  return Object.values( this.forma.controls).forEach(
    control => {control.markAsTouched();
      }
    );
   }
console.log(this.propiedadAux);
  }*/
}
