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
    console.log('todo bien aca getallusuario');
    return this.http.get(`${this.URL}getallUsuarios.php`, {responseType: 'text'});
}
  deleteUsuario(legajo: string): any{
    return this.http.get(`${this.URL}deleteUsuario.php?legajo=${legajo}`);
  }
  seleccionarUsuario(legajo: string): any {
    return this.http.get(`${this.URL}getUsuario.php?legajo=${legajo}`, {responseType: 'text'});
  }
  editarUsuario(usuario: Usuario): any {
    return this.http.post(`${this.URL}updateUsuario.php`, JSON.stringify(usuario));
  }

}
