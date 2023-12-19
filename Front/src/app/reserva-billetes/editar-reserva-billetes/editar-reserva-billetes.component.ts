import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva-billetes.service';
import { ReservaBilletes } from '../reserva-billetes';
import { Usuarios } from '../../usuarios/usuarios';
import { Horario } from '../../horario/horario';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-reserva-billetes',
  templateUrl: './editar-reserva-billetes.component.html',
  styleUrls: ['./editar-reserva-billetes.component.css']
})
export class EditarReservaBilletesComponent implements OnInit {
  reserva: ReservaBilletes = new ReservaBilletes();
  idUsuario: number | undefined;
  idHorario: number | undefined;

  usuarios: Usuarios[] = [];
  horarios: Horario[] = [];

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idReserva = this.route.snapshot.params['id_reserva'];
    this.obtenerReserva(idReserva);
    this.obtenerUsuarios();
    this.obtenerHorarios();
  }

  obtenerReserva(idReserva: number) {
    this.reservaService.obtenerReservaPorId(idReserva).subscribe(
      (reserva: ReservaBilletes) => {
        this.reserva = reserva;
        this.idUsuario = reserva.id_usuario[0].id_usuario;
        this.idHorario = reserva.id_horario[0].id_horario;
      },
      (error) => {
        console.error('Error al obtener reserva:', error);
      }
    );
  }

  obtenerUsuarios() {
    this.reservaService.listarUsuarios().subscribe(
      (usuarios: Usuarios[]) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  obtenerHorarios() {
    this.reservaService.obtenerTodos().subscribe(
      (horarios: Horario[]) => {
        this.horarios = horarios;
      },
      (error) => {
        console.error('Error al obtener horarios:', error);
      }
    );
  }

  actualizarReserva() {
    if(this.validarformulario()){
      if (this.idHorario && this.idUsuario) {
        // Actualiza los campos de la reserva con los nuevos valores
        this.reserva.id_usuario[0].id_usuario = this.idUsuario;
        this.reserva.id_horario[0].id_horario = this.idHorario;
  
        this.reservaService.editarReserva(this.reserva, this.reserva.id_reserva).subscribe(
          (reservaActualizada) => {
            console.log('Reserva actualizada correctamente:', reservaActualizada);
            this.irAReservas();
          },
          (error) => {
            console.error('Error al actualizar reserva:', error);
          }
        );
      } else {
        console.error('Selecciona un horario y un usuario antes de actualizar la reserva.');
      }
    }

    }


  irAReservas() {
    this.router.navigate(['/reservas']);
  }

  validarformulario(){
    if(!this.reserva.detalle_pasajero ||
      !this.reserva.estado_reserva ||
      !this.reserva.num_asientos_reservados ||
      !this.reserva.id_horario ||
      this.reserva.id_horario){
        Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        return false;
      }
      // Validación de solo texto en nombre_usuario
      const soloTextoRegex = /^[a-zA-Z\s]*$/;

      if (!soloTextoRegex.test(this.reserva.detalle_pasajero)) {
        Swal.fire('Error', 'Solo se permiten letras en el modelo del tren', 'error');
        return false;
      }
      // Validación de solo números en capacidad
    const soloNumerosRegex = /^\d+$/;
    if (!soloNumerosRegex.test(String(this.reserva.num_asientos_reservados))) {
      Swal.fire('Error', 'El número de asientos solo debe contener números', 'error');
      return;
    }
    return true;
  }
}
