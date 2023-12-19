import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservaBilletes } from './reserva-billetes';
import { Horario } from '../horario/horario';
import { Usuarios } from '../usuarios/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://26.229.160.162:8080/api/reservas';
  private url= "http://26.229.160.162:8080/api/usuarios";
  private apiUrl2 = 'http://26.229.160.162:8080/api/horarios';

  constructor(private http: HttpClient) {}

  agregarReserva(reserva: ReservaBilletes, id_usuario: number, id_horario: number): Observable<ReservaBilletes> {
    return this.http.post<ReservaBilletes>(`${this.apiUrl}/agregar/${id_usuario}/${id_horario}`, reserva);
  }

  obtenerTodas(): Observable<ReservaBilletes[]> {
    return this.http.get<ReservaBilletes[]>(`${this.apiUrl}/listar`);
  }

  editarReserva(reserva: ReservaBilletes, id_reserva: number): Observable<ReservaBilletes> {
    return this.http.put<ReservaBilletes>(`${this.apiUrl}/editar/${id_reserva}`, reserva);
  }

  eliminarReserva(id_reserva: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_reserva}`);
  }

  obtenerReservaPorId(id_reserva: number): Observable<ReservaBilletes> {
    return this.http.get<ReservaBilletes>(`${this.apiUrl}/listar/${id_reserva}`);
  }
  obtenerTodos(): Observable<Horario[]> {
    return this.http.get<Horario[]>(`${this.apiUrl2}/listar/todos`);
  }

  public listarUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.url+"/obtener");   
  }
}
