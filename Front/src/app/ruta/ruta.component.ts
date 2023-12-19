// ruta.component.ts

import { Component, OnInit } from '@angular/core';
import { RutaService } from './ruta.service';
import { Ruta } from './ruta';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();

  rutas: Ruta[] = [];

  constructor(private rutaService: RutaService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    this.obtenerTodasRutas();
  }

  obtenerTodasRutas() {
    this.rutaService.obtenerTodos().subscribe(
      (rutas: Ruta[]) => {
        this.rutas = rutas;
        this.dtTrigger.next(this.dtOptions);
        this.dtTrigger.unsubscribe(); // Desactivar DataTables
      },
      (error) => {
        console.error('Error al obtener rutas:', error);
      }
    );
  }

  eliminarRuta(id_ruta: number) {
    this.rutaService.eliminarRuta(id_ruta).subscribe(
      () => {
        console.log('Ruta eliminada correctamente');
        // Actualizar la lista de rutas después de eliminar
        this.obtenerTodasRutas();
      },
      (error) => {
        console.error('Error al eliminar ruta:', error);
      }
    );
  }

  irAGuardarRuta() {
    this.router.navigate(['/guardar-ruta']);
  }

  irAEditarRuta(id_ruta: number) {
    this.router.navigate(['/editar-ruta', id_ruta]);
  }
  
  irAHorario() {
    this.router.navigate(['/horarios']);
  }
}
