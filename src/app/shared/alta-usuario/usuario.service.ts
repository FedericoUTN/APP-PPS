import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Usuario } from 'src/app/model/Usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost/server/';

  constructor(private http: HttpClient) { }

  createUsuario(usuario: Usuario): any{
    return this.http.post(`${this.URL}createUsuario.php`, JSON.stringify(usuario), {responseType: 'text'});
  }
  getAllUsuarios(): any{
    return this.http.get(`${this.URL}getallUsuarios.php`);
}
}