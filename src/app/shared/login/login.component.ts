import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formLogin: FormGroup;
mail = '';
pass = '';


  constructor(private formBuilder: FormBuilder) {
this.formLogin = this.formBuilder.group({
  correo: [''],
  password: ['']
});
   }

  ngOnInit(): void {
  }
  save(): void {

}

}
