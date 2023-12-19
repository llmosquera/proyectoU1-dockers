import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../horario.service';
import { Horario } from '../horario';
import { Ruta } from 'src/app/ruta/ruta';
import { Tren } from 'src/app/tren/tren';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-horario',
  templateUrl: './guardar-horario.component.html',
  styleUrls: ['./guardar-horario.component.css']
})
export class GuardarHorarioComponent implements OnInit {
  nuevoHorario: Horario = new Horario();
  idRuta: number | undefined;
  idTren: number | undefined;

  rutas: Ruta[] = [];
  trenes: Tren[] = [];

  constructor(private horarioService: HorarioService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerRutas();
    this.obtenerTrenes();
  }

  obtenerRutas() {
    this.horarioService.obtenerRutas().subscribe(
      (rutas: Ruta[]) => {
        this.rutas = rutas;
      },
      (error) => {
        console.error('Error al obtener rutas:', error);
      }
    );
  }

  obtenerTrenes() {
    this.horarioService.ObtenerTrenes().subscribe(
      (trenes: Tren[]) => {
        this.trenes = trenes;
      },
      (error) => {
        console.error('Error al obtener trenes:', error);
      }
    );
  }

  guardarHorario() {
    if(this.validarformulario()){
      if (this.idRuta && this.idTren) {
        this.horarioService.guardarHorario(this.nuevoHorario, this.idRuta, this.idTren).subscribe(
          (horarioGuardado) => {
            console.log('Horario guardado correctamente:', horarioGuardado);
            this.irAHorarios();
          },
          (error) => {
            console.error('Error al guardar horario:', error);
          }
        );
      } else {
        console.error('Selecciona una ruta y un tren antes de guardar el horario.');
      }

    }

  }

  irAHorarios() {
    this.router.navigate(['/horarios']);
  }
  validarformulario(){
    if(!this.nuevoHorario.dias_semana ||
      !this.nuevoHorario.hora_llegada ||
      !this.nuevoHorario.hora_salida || 
      !this.nuevoHorario.id_ruta ||
      !this.nuevoHorario.id_tren
      ){
        Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        return false;
      }
      return true;
  }
}
