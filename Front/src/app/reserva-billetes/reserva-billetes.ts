import { Horario } from "../horario/horario";
import { Usuarios } from "../usuarios/usuarios";

export class ReservaBilletes {
    id_reserva: number;
    id_horario: Horario[];
    detalle_pasajero: string;
    num_asientos_reservados: string;
    estado_reserva: boolean;
    id_usuario: Usuarios[];
   
  }