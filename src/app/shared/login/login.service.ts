import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL = 'http://localhost/server/';
  constructor(private http: HttpClient) { }

  login(): any{
    return this.http.post(`${this.URL}login.php`, {responseType: 'text'});
  }

}

