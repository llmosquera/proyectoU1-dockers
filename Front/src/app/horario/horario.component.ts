// horario.component.ts

import { Component, OnInit } from '@angular/core';
import { HorarioService } from './horario.service';
import { Horario } from './horario';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();

  horarios: Horario[] = [];

  constructor(private horarioService: HorarioService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    this.obtenerTodosHorarios();
  }

  obtenerTodosHorarios() {
    this.horarioService.obtenerTodos().subscribe(
      (horarios: Horario[]) => {
        this.horarios = horarios;
        this.dtTrigger.next(this.dtOptions);
        this.dtTrigger.unsubscribe(); // Desactivar DataTables
      },
      (error) => {
        console.error('Error al obtener horarios:', error);
      }
    );
  }

  eliminarHorario(id_horario: number) {
    this.horarioService.eliminarHorario(id_horario).subscribe(
      () => {
        console.log('Horario eliminado correctamente');
        // Actualizar la lista de horarios después de eliminar
        this.obtenerTodosHorarios();
      },
      (error) => {
        console.error('Error al eliminar horario:', error);
      }
    );
  }
  irAEditarHorario(id_horario: number) {
    this.router.navigate(['/editar-horario', id_horario]);
  }



  IrAGuardarHorario() {
    this.router.navigate(['/guardar-horario']);
  }

  IrAReservas(){
    this.router.navigate(['/reservas']);
  }
}
