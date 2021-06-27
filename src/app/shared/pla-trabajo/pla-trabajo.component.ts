import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlanTrabajo } from 'src/app/model/PlanTrabajo';

@Component({
  selector: 'app-pla-trabajo',
  templateUrl: './pla-trabajo.component.html',
  styleUrls: ['./pla-trabajo.component.css']
})
export class PlaTrabajoComponent implements OnInit {
formPlan: FormGroup;
isFormPlan = false;
PlanTrabajo: Array<PlanTrabajo>;
Actividad: PlanTrabajo = {fecha: new Date(), descripcion: '', horasParciales: 0, hotasTotales: 0 };
TotalHoras = 0;

  constructor(private formBuilder: FormBuilder) {
this.PlanTrabajo = [];
this.formPlan = this.formBuilder.group({
  fecha: [''],
  descripcion: [''],
  horasP: ['']

});
   }

  ngOnInit(): void {
  }
  agregar(): void{
    this.isFormPlan = !this.isFormPlan;
  }
  agregarActividad(): void{
    this.TotalHoras += this.Actividad.horasParciales;
    this.Actividad.hotasTotales = this.TotalHoras;
    let newActividad = new PlanTrabajo(new Date(), '',  0,  0 );
    newActividad = Object.assign({}, this.Actividad); // asi evito pasar el objeto como refernecia y paso uno nuevo
    this.PlanTrabajo.push(newActividad);
    this.formPlan.reset();
    this.isFormPlan = !this.isFormPlan;

  }

}
