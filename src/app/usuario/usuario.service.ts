import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Usuario {
  id: string,
  nome: string,
  cidade: string,
  email: string,
  passwd: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://localhost:3000/usuarios"
  //json-server --watch db.json

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Usuario[]>(this.url + '?_sort=nome&_order=asc')
  }

  delete(id: any){
    return this.http.delete(this.url + '/' + id)
  }

  salvar(usuario: Usuario){
    return this.http.post(this.url, usuario)
  }

  atualizar(id: any, usuario: Usuario){
    return this.http.put(this.url + '/' + id, usuario);
  }

}
