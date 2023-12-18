import { Ruta } from '../ruta/ruta';
import { Tren } from '../tren/tren';
export class Estacion {
    id_estacion: number;
    nombre_estacion: string;
    ubicacion_estacion: string;
    plataformas_estacion: string;
    estacion_origen: string;
    estacion_destino: string;
    rutaEntidad: Ruta;
    trenEntidad: Tren;
  }
  