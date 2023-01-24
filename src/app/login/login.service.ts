import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:3000/usuarios"

  constructor(private http: HttpClient) { }

  login(email: any, senha: any){
    return this.http.get<Usuario>(this.url + '?email=' + email + '&passwd=' + senha)
  }

}
