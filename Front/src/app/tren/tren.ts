import { Estacion } from '../estacion/estacion';

export class Tren {
  id_tren: number;
  modelo_tren: string;
  capacidad: string;
  estado: boolean;
  id_estacion: Estacion[];
}
