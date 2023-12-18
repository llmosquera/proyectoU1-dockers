import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpUsuarios:HttpClient) { }
  url= "http://26.229.160.162:8080/api/usuarios"
  //listar
  public listarUsuarios():Observable<Usuarios[]>{
    return this.httpUsuarios.get<Usuarios[]>(this.url+"/obtener");   
  }

  //guardar
  public guardarUsuario(usuarios:Usuarios):Observable<Object>{
    return this.httpUsuarios.post(this.url+"/guardar",usuarios);
  }

  //editar
  public editarUsuario(id_usuario:number, usuarios:Usuarios):Observable<Object>{
    return this.httpUsuarios.put(this.url+"/actualizar/"+id_usuario,usuarios);
  }
  actualizarUsuario(usuario: Usuarios, id_usuario: number): Observable<Usuarios> {
    return this.httpUsuarios.put<Usuarios>(`${this.url}/actualizar/${id_usuario}`, usuario);
  }

  public eliminarUsuario(id_usuario:number):Observable<void>{
    return this.httpUsuarios.delete<void>(this.url+"/eliminar/"+id_usuario);
  }

  public obtenerUsuarioPorId(id_usuario:number):Observable<Usuarios>{
    return this.httpUsuarios.get<Usuarios>(`${this.url}/obtener/${id_usuario}`);
  }
  
 

}
