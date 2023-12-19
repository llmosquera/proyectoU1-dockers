import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva-billetes.service';
import { ReservaBilletes } from '../reserva-billetes';
import { Usuarios } from '../../usuarios/usuarios';
import { Horario } from '../../horario/horario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-reserva-billetes',
  templateUrl: './guardar-reserva-billetes.component.html',
  styleUrls: ['./guardar-reserva-billetes.component.css']
})
export class GuardarReservaBilletesComponent implements OnInit {

  nuevaReserva: ReservaBilletes = new ReservaBilletes();

  idUsuario: number | undefined;
  idHorario: number | undefined;


  usuarios: Usuarios[] = [];
  horarios: Horario[] = [];

  constructor(
    private reservaService: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerHorarios();
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

  guardarReserva() {
    if(this.validarformulario()){
      if (this.idHorario && this.idUsuario) {
        this.reservaService.agregarReserva(this.nuevaReserva, this.idHorario, this.idUsuario).subscribe(
          (reservaGuardada) => {
            console.log('Reserva guardada correctamente:', reservaGuardada);
            this.irAReservas();
          },
          (error) => {
            console.error('Error al guardar reserva:', error);
          }
        );
      } else {
        console.error('Selecciona un horario y un usuario antes de guardar la reserva.');
      }

    }

  }

  validarformulario(){
    if(!this.nuevaReserva.detalle_pasajero ||
      !this.nuevaReserva.estado_reserva ||
      !this.nuevaReserva.num_asientos_reservados ||
      !this.nuevaReserva.id_horario ||
      this.nuevaReserva.id_horario){
        Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        return false;
      }
      // Validación de solo texto en nombre_usuario
      const soloTextoRegex = /^[a-zA-Z\s]*$/;

      if (!soloTextoRegex.test(this.nuevaReserva.detalle_pasajero)) {
        Swal.fire('Error', 'Solo se permiten letras en el modelo del tren', 'error');
        return false;
      }
      // Validación de solo números en capacidad
    const soloNumerosRegex = /^\d+$/;
    if (!soloNumerosRegex.test(String(this.nuevaReserva.num_asientos_reservados))) {
      Swal.fire('Error', 'El número de asientos solo debe contener números', 'error');
      return;
    }
    return true;
  }
  

  irAReservas() {
    this.router.navigate(['/reservas']);
  }
}
