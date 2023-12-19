
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrenService } from '../tren.service';
import { Tren } from '../tren';
import { Estacion } from 'src/app/estacion/estacion';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-tren',
  templateUrl: './editar-tren.component.html',
  styleUrls: ['./editar-tren.component.css']
})
export class EditarTrenComponent implements OnInit {

  nuevoTren: Tren = new Tren();
  idEstacion: number | undefined; // Utiliza un tipo opcional

  estaciones: Estacion[] = [];

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

  tren: Tren = new Tren();

  constructor(
    private trenService: TrenService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEstaciones();

    const id_tren = this.route.snapshot.params['id_tren'];


    this.trenService.obtenerTrenPorId(id_tren).subscribe(
      (trenObtenido) => {
        this.tren = trenObtenido;
      },
      (error) => {
        console.error('Error al obtener el tren:', error);
      }
    );
  }

  actualizarTren() {
    if(this.validarfomulario()){
      this.trenService.actualizarTren(this.tren, this.tren.id_tren).subscribe(
        (trenActualizado) => {
          console.log('Tren actualizado correctamente:', trenActualizado);
          this.router.navigate(['/trenes']);
        },
        (error) => {
          console.error('Error al actualizar el tren:', error);
        }
      );

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

}
