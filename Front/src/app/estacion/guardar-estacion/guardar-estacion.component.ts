import { Component } from '@angular/core';
import { EstacionService } from '../estacion.service';
import { Estacion } from '../estacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-estacion',
  templateUrl: './guardar-estacion.component.html',
  styleUrls: ['./guardar-estacion.component.css']
})
export class GuardarEstacionComponent {

  nuevaEstacion: Estacion = new Estacion();

  constructor(private estacionService: EstacionService, private router: Router) {}

  guardarEstacion() {
    if (this.validarFormulario()) {
      this.estacionService.guardarEstacion(this.nuevaEstacion).subscribe(
        (estacionGuardada) => {
          console.log('Estación guardada correctamente:', estacionGuardada);
          this.irAEstaciones();
        },
        (error) => {
          console.error('Error al guardar estación:', error);
        }
      );
    }
  }
  irAEstaciones() {
    this.router.navigate(['/estaciones']);
  }
  validarFormulario(): boolean {
    // Validación de campos vacíos
    if (
      !this.nuevaEstacion.nombre_estacion ||
      !this.nuevaEstacion.ubicacion_estacion ||
      !this.nuevaEstacion.plataformas_estacion ||
      !this.nuevaEstacion.estacion_origen ||
      !this.nuevaEstacion.estacion_destino
    ) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return false;
    }

    // Validación de solo texto en campos de texto
    const soloTextoRegex = /^[a-zA-Z\s]*$/;

    if (
      !soloTextoRegex.test(this.nuevaEstacion.nombre_estacion) ||
      !soloTextoRegex.test(this.nuevaEstacion.ubicacion_estacion) ||
      !soloTextoRegex.test(this.nuevaEstacion.plataformas_estacion) 
      
    ) {
      Swal.fire('Error', 'Solo se permiten letras en los campos de texto', 'error');
      return false;
    }

    return true;
  }
}