import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tren } from './tren';
import { Estacion } from '../estacion/estacion';

@Injectable({
  providedIn: 'root'
})
export class TrenService {
  private apiUrl = 'http://26.229.160.162:8080/api/tren';
  private apiUrl2 = 'http://26.229.160.162:8080/api/estaciones';

  constructor(private http: HttpClient) {}

  guardarTrenConEstacion(tren: Tren, id_estacion: number): Observable<Tren> {
    return this.http.post<Tren>(`${this.apiUrl}/insertar/${id_estacion}`, tren);
  }

  actualizarTren(tren: Tren, id_tren: number): Observable<Tren> {
    return this.http.put<Tren>(`${this.apiUrl}/actualizar/${id_tren}`, tren);
  }

  eliminarTren(id_tren: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_tren}`);
  }

  obtenerTodos(): Observable<Tren[]> {
    return this.http.get<Tren[]>(`${this.apiUrl}/listar`);
  }

  obtenerTrenPorId(id_tren: number): Observable<Tren> {
    return this.http.get<Tren>(`${this.apiUrl}/listar/${id_tren}`);
  }


  obtenerEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.apiUrl2}/obtener`);
  }
}
