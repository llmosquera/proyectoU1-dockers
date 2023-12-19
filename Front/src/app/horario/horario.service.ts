// horario.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Horario } from './horario';
import { Ruta } from '../ruta/ruta';
import { Tren } from '../tren/tren';
@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private apiUrl = 'http://26.229.160.162:8080/api/horarios';
  private apiUrl2 = 'http://26.229.160.162:8080/api/rutas';
  private apiUrl3 = 'http://26.229.160.162:8080/api/tren';

  constructor(private http: HttpClient) {}

  guardarHorario(horario: Horario, id_ruta: number, id_tren: number): Observable<Horario> {
    return this.http.post<Horario>(`${this.apiUrl}/insertar/${id_ruta}/${id_tren}`, horario);
  }

  actualizarHorario(horario: Horario, id_horario: number): Observable<Horario> {
    return this.http.put<Horario>(`${this.apiUrl}/actualizar/${id_horario}`, horario);
  }

  eliminarHorario(id_horario: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_horario}`);
  }

  obtenerTodos(): Observable<Horario[]> {
    return this.http.get<Horario[]>(`${this.apiUrl}/listar/todos`);
  }

  obtenerHorarioPorId(id_horario: number): Observable<Horario> {
    return this.http.get<Horario>(`${this.apiUrl}/listar/${id_horario}`);
  }

  obtenerRutas(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${this.apiUrl2}/todos`);
  }

  ObtenerTrenes(): Observable<Tren[]> {
    return this.http.get<Tren[]>(`${this.apiUrl3}/listar`);
  }
}
