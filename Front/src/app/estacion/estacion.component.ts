import { Component, OnInit } from '@angular/core';
import { EstacionService } from './estacion.service';
import { Estacion } from './estacion';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit {
  dtOptions:DataTables.Settings={};
  data:any=[]; //aqui se alamcena
  dtTrigger:Subject<any> = new Subject<any>();
  estaciones: Estacion[] = [];
  estacionesLista:any;

  constructor(private estacionService: EstacionService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    
    this.obtenerTodasEstaciones();
  }

  obtenerTodasEstaciones() {
    this.estacionService.obtenerTodasEstaciones().subscribe(
      (estaciones: Estacion[]) => {
        this.estaciones = estaciones;
        this.dtTrigger.next(this.dtOptions);
      },
      (error) => {
        console.error('Error al obtener estaciones:', error);
      }
    );
  }


  eliminarEstacion(id_estacion: number) {
    this.estacionService.eliminarEstacion(id_estacion).subscribe(
      () => {
        console.log('Estación eliminada correctamente');
       
        this.obtenerTodasEstaciones();
      },
      (error) => {
        console.error('Error al eliminar estación:', error);
      }
    );
  }
  irAGuardarEstacion() {
    this.router.navigate(['/guardar-estacion']);
  }

  irAEditarEstacion(id_estacion: number) {
    this.router.navigate(['/editar-estacion', id_estacion]);
  }

  

  irATrenes() {
    this.router.navigate(['/trenes']);
  }
}
