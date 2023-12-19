import { Component, OnInit } from '@angular/core';
import { TrenService } from '../tren.service';
import { Tren } from '../tren';
import { Estacion } from 'src/app/estacion/estacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-tren',
  templateUrl: './guardar-tren.component.html',
  styleUrls: ['./guardar-tren.component.css']
})
export class GuardarTrenComponent implements OnInit {

  nuevoTren: Tren = new Tren();
  idEstacion: number | undefined; // Utiliza un tipo opcional

  estaciones: Estacion[] = [];

  constructor(private trenService: TrenService, private router :Router) {}

  ngOnInit(): void {
    this.obtenerEstaciones();
  }
//Obtener estaciones
  obtenerEstaciones() {
    this.trenService.obtenerEstaciones().subscribe(
      (estaciones: Estacion[]) => {
        this.estaciones = estaciones;
      },
      (error) => {
        console.error('Error al obtener estaciones:', error);
      }
    );
  }

  guardarTren() {
    if(this.validarfomulario()){
      if (this.idEstacion) { // Verifica que se haya seleccionado una estación
        this.trenService.guardarTrenConEstacion(this.nuevoTren, this.idEstacion).subscribe(
          (trenGuardado) => {
            console.log('Tren guardado correctamente:', trenGuardado);
            this.irATrenes();
          },
          (error) => {
            console.error('Error al guardar tren:', error);
          }
        );
      } else {
        console.error('Selecciona una estación antes de guardar el tren.');
      }

    }
   
  }

  validarfomulario(){
    if(
      !this.nuevoTren.modelo_tren ||
      !this.nuevoTren.capacidad ||
      !this.nuevoTren.estado ||
      !this.nuevoTren.id_estacion
    ){
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return false;
    }
      // Validación de solo texto en nombre_usuario
      const soloTextoRegex = /^[a-zA-Z\s]*$/;

      if (!soloTextoRegex.test(this.nuevoTren.modelo_tren)) {
        Swal.fire('Error', 'Solo se permiten letras en el modelo del tren', 'error');
        return false;
      }
      // Validación de solo números en capacidad
    const soloNumerosRegex = /^\d+$/;
    if (!soloNumerosRegex.test(String(this.nuevoTren.capacidad))) {
      Swal.fire('Error', 'La capacidad solo debe contener números', 'error');
      return;
    }
    return true;
  }

  irATrenes() {
    this.router.navigate(['/trenes']);
  }
}
