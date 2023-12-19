import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { Estacion } from 'src/app/estacion/estacion';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent implements OnInit{
  nuevaRuta: Ruta = new Ruta();
  idEstacion: number | undefined; // Utiliza un tipo opcional

  estaciones: Estacion[] =[];

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
  ruta: Ruta = new Ruta();

  constructor(
    private rutaService: RutaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEstaciones();

    const id_ruta = this.route.snapshot.params['id_ruta'];
    this.rutaService.obtenerRutaPorId(id_ruta).subscribe(
      (rutaobtenida) => {
        this.ruta = rutaobtenida;
      },
      (error) => {
        console.error('Error al obtener la ruta:', error);
      }
    );
}
actualizarRuta() {
    
  this.rutaService.actualizarRuta(this.ruta, this.ruta.id_ruta).subscribe(
    (rutactualizada) => {
      console.log('Ruta actualizada correctamente:', rutactualizada);
      this.router.navigate(['/rutas']);
    },
    (error) => {
      console.error('Error al actualizar la ruta:', error);
    }
  );
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
}
