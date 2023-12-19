import { Estacion } from '../estacion/estacion';
import { forwardRef } from '@angular/core';
export class Ruta {
  id_ruta: number;
  descripcion: string;
  duracion_estimada: string;
  id_estacion: Estacion[];
}
