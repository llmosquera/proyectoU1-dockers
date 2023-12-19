import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../horario.service';
import { Horario } from '../horario';
import { Ruta } from 'src/app/ruta/ruta';
import { Tren } from 'src/app/tren/tren';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['./editar-horario.component.css']
})
export class EditarHorarioComponent implements OnInit {
  horario: Horario = new Horario();
  idRuta: number | undefined;
  idTren: number | undefined;

  rutas: Ruta[] = [];
  trenes: Tren[] = [];

  constructor(
    private horarioService: HorarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idHorario = this.route.snapshot.params['id_horario'];
    this.obtenerHorario(idHorario);
    this.obtenerRutas();
    this.obtenerTrenes();
  }

  obtenerHorario(idHorario: number) {
    this.horarioService.obtenerHorarioPorId(idHorario).subscribe(
      (horario: Horario) => {
        this.horario = horario;
        this.idRuta = horario.id_ruta[0].id_ruta;
        this.idTren = horario.id_tren[0].id_tren;
      },
      (error) => {
        console.error('Error al obtener horario:', error);
      }
    );
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

  actualizarHorario() {
    if (this.idRuta && this.idTren) {
      // Actualiza los campos del horario con los nuevos valores
      this.horario.id_ruta[0].id_ruta = this.idRuta;
      this.horario.id_tren[0].id_tren = this.idTren;

      this.horarioService.actualizarHorario(this.horario, this.horario.id_horario).subscribe(
        (horarioActualizado) => {
          console.log('Horario actualizado correctamente:', horarioActualizado);
          this.irAHorarios();
        },
        (error) => {
          console.error('Error al actualizar horario:', error);
        }
      );
    } else {
      console.error('Selecciona una ruta y un tren antes de actualizar el horario.');
    }
  }

  irAHorarios() {
    this.router.navigate(['/horarios']);
  }
}