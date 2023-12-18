import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstacionService } from '../estacion.service';
import { Estacion } from '../estacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-estacion',
  templateUrl: './editar-estacion.component.html',
  styleUrls: ['./editar-estacion.component.css']
})
export class EditarEstacionComponent implements OnInit {

  estacion: Estacion = new Estacion();

  constructor(
    private estacionService: EstacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id_estacion = this.route.snapshot.params['id_estacion'];


    this.estacionService.obtenerEstacionPorId(id_estacion).subscribe(
      (estacionObtenida) => {
        this.estacion = estacionObtenida;
      },
      (error) => {
        console.error('Error al obtener la estación:', error);
      }
    );
  }

  actualizarEstacion(id_estacion: number) {
    if(this.validarFormulario()){
      this.estacionService.actualizarEstacion(this.estacion, id_estacion).subscribe(
        (estacionActualizada) => {
          console.log('Estación actualizada correctamente:', estacionActualizada);
          this.irAEstaciones();
        },
        (error) => {
          console.error('Error al actualizar la estación:', error);
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
      !this.estacion.nombre_estacion ||
      !this.estacion.ubicacion_estacion ||
      !this.estacion.plataformas_estacion ||
      !this.estacion.estacion_origen ||
      !this.estacion.estacion_destino
    ) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return false;
    }

    // Validación de solo texto en campos de texto
    const soloTextoRegex = /^[a-zA-Z\s]*$/;

    if (
      !soloTextoRegex.test(this.estacion.nombre_estacion) ||
      !soloTextoRegex.test(this.estacion.ubicacion_estacion) ||
      !soloTextoRegex.test(this.estacion.plataformas_estacion) 
      
    ) {
      Swal.fire('Error', 'Solo se permiten letras en los campos de texto', 'error');
      return false;
    }

    return true;
  }
}