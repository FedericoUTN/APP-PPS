import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pla-trabajo',
  templateUrl: './pla-trabajo.component.html',
  styleUrls: ['./pla-trabajo.component.css']
})
export class PlaTrabajoComponent implements OnInit {

formPlan: FormGroup;
isFormPlan = false;

    constructor(private formBuilder: FormBuilder) {
  this.formPlan = this.formBuilder.group({
    fecha: [''],
    descripcion: [''],
    horasP: [''],
    hottalT: ['']
  });
     }

    ngOnInit(): void {
    }

}
