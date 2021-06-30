import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
test = null;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
this.formLogin = this.formBuilder.group({
  legajo: [''],
  password: ['']
});
   }

  ngOnInit(): void {
  }
  save(): void {
    this.loginService.login().subscribe(
      (      datos: any) => {
        console.log(datos);
      }
    );
}

}
