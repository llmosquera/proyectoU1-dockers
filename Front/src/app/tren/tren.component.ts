import { Component, OnInit } from '@angular/core';
import { TrenService } from './tren.service';
import { Tren } from './tren';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tren',
  templateUrl: './tren.component.html',
  styleUrls: ['./tren.component.css']
})
export class TrenComponent implements OnInit {
  dtOptions:DataTables.Settings={};
  data:any=[]; //aqui se alamcena
  dtTrigger:Subject<any> = new Subject<any>();

  trenes: Tren[] = [];

  constructor(private trenService: TrenService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    this.obtenerTodosTrenes();
  }

  obtenerTodosTrenes() {
    this.trenService.obtenerTodos().subscribe(
      (trenes: Tren[]) => {
        this.trenes = trenes;
        this.dtTrigger.next(this.dtOptions);
      },
      (error) => {
        console.error('Error al obtener trenes:', error);
      }
    );
  }

  eliminarTren(id_tren: number) {
    this.trenService.eliminarTren(id_tren).subscribe(
      () => {
        console.log('Tren eliminado correctamente');
        // Actualizar la lista de trenes después de eliminar
        this.obtenerTodosTrenes();
      },
      (error) => {
        console.error('Error al eliminar tren:', error);
      }
    );
  }
  irAGuardarTren() {
    this.router.navigate(['/guardar-tren']);
  }
  irAEditarTren(id_tren: number) {
    this.router.navigate(['/editar-tren', id_tren]);
  }

  irAEstaciones() {
    this.router.navigate(['/estaciones']);
  }

  irARutas() {
    this.router.navigate(['/rutas']);
  }
}
