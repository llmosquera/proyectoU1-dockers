import { Ruta } from "../ruta/ruta";
import { Tren } from "../tren/tren";
export class Horario {
  id_horario: number;
  dias_semana: string;
  hora_salida: string;
  hora_llegada: string;
  id_ruta: Ruta[];
  id_tren: Tren[];
}
