import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from 'src/app/model/Empresa';
import { SolicitudInicio } from 'src/app/model/SolicitudInicio';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  URL = 'http://localhost/server/';
  constructor(private http: HttpClient) { }
  createSolicitudInicio(solicitud: SolicitudInicio): any{
    return this.http.post(`${this.URL}createSolicitud.php`, JSON.stringify(solicitud), {responseType: 'text'});
  }
  createEmpresa(empresa: Empresa): any{
    return this.http.post(`${this.URL}createEmpresa.php`, JSON.stringify(empresa), {responseType: 'text'});
  }
}
