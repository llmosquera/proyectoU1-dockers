import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ruta } from './ruta';
import { Estacion } from '../estacion/estacion';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private apiUrl = 'http://26.229.160.162:8080/api/rutas';
  private apiUrl2 = 'http://26.229.160.162:8080/api/estaciones';

  constructor(private http: HttpClient) {}

  guardarRutaConSuTren(ruta: Ruta, id_estacion: number): Observable<Ruta> {
    return this.http.post<Ruta>(`${this.apiUrl}/insertar/${id_estacion}`, ruta);
  }

  actualizarRuta(ruta: Ruta, id_ruta: number): Observable<Ruta> {
    return this.http.put<Ruta>(`${this.apiUrl}/actualizar/${id_ruta}`, ruta);
  }

  eliminarRuta(id_ruta: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_ruta}`);
  }

  obtenerTodos(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${this.apiUrl}/todos`);
  }

  obtenerRutaPorId(id_ruta: number): Observable<Ruta> {
    return this.http.get<Ruta>(`${this.apiUrl}/todos/${id_ruta}`);
  }
  obtenerEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.apiUrl2}/obtener`);
  }
}
