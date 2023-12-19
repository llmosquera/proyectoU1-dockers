import { Component, OnInit } from '@angular/core';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { Estacion } from 'src/app/estacion/estacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-ruta',
  templateUrl: './guardar-ruta.component.html',
  styleUrls: ['./guardar-ruta.component.css']
})
export class GuardarRutaComponent implements OnInit {
  nuevaRuta: Ruta = new Ruta();
  idEstacion: number | undefined; // Utiliza un tipo opcional

  estaciones: Estacion[] = [];

  constructor(private rutaService: RutaService, private router: Router) {

  }
  ngOnInit(): void {
    this.obtenerEstaciones();
  }

  obtenerEstaciones() {
    this.rutaService.obtenerEstaciones().subscribe(
      (estaciones: Estacion[]) => {
        this.estaciones = estaciones;
      },
      (error) => {
        console.error('Error al obtener estaciones:', error);
      }
    );
  }
  guardarRuta() {
    if (this.validarformulario()) {
      if (this.idEstacion) { // Verifica que se haya seleccionado una estación
        this.rutaService.guardarRutaConSuTren(this.nuevaRuta, this.idEstacion).subscribe(
          (rutaguardada) => {
            console.log('Ruta guardada correctamente:', rutaguardada);
            this.irARutas();
          },
          (error) => {
            console.error('Error al guardar ruta:', error);
          }
        );
      } else {
        console.error('Selecciona una estación antes de guardar la ruta.');
      }
    }

  }

  validarformulario() {
    if (
      !this.nuevaRuta.descripcion ||
      !this.nuevaRuta.duracion_estimada ||
      !this.nuevaRuta.id_estacion
    ) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return false;
    }
    // Validación de solo texto en nombre_usuario
    const soloTextoRegex = /^[a-zA-Z\s]*$/;

    if (!soloTextoRegex.test(this.nuevaRuta.descripcion)) {
      Swal.fire('Error', 'Solo se permiten letras en el modelo del tren', 'error');
      return false;
    }
    // Validación de solo números en capacidad
    return true;
  }


  irARutas() {
    this.router.navigate(['/rutas']);
  }

}
