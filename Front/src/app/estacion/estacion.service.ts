import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estacion } from './estacion';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  private apiUrl = 'http://26.229.160.162:8080/api/estaciones';

  constructor(private http: HttpClient) {}

  guardarEstacion(estacion: Estacion): Observable<Estacion> {
    return this.http.post<Estacion>(`${this.apiUrl}/guardar`, estacion);
  }

  obtenerTodasEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.apiUrl}/obtener`);
  }

  eliminarEstacion(id_estacion: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_estacion}`);
  }

  actualizarEstacion(estacion: Estacion, id_estacion: number): Observable<Estacion> {
    return this.http.put<Estacion>(`${this.apiUrl}/actualizar/${id_estacion}`, estacion);
  }
  obtenerEstacionPorId(id_estacion: number): Observable<Estacion> {
    return this.http.get<Estacion>(`${this.apiUrl}/obtener/${id_estacion}`);
  }
}
