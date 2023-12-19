import { Component, OnInit } from '@angular/core';
import { ReservaService } from './reserva-billetes.service';
import { ReservaBilletes } from './reserva-billetes';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reserva-billetes',
  templateUrl: './reserva-billetes.component.html',
  styleUrls: ['./reserva-billetes.component.css']
})
export class ReservaBilletesComponent implements OnInit {
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();
  reservas: ReservaBilletes[] = [];

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    this.obtenerTodasReservas();
  }

  obtenerTodasReservas() {
    this.reservaService.obtenerTodas().subscribe(
      (reservas: ReservaBilletes[]) => {
        this.reservas = reservas;
        this.dtTrigger.next(this.dtOptions);
        this.dtTrigger.unsubscribe(); // Desactivar DataTables
      },
      (error) => {
        console.error('Error al obtener reservas:', error);
      }
    );
  }

  eliminarReserva(id_reserva: number) {
    this.reservaService.eliminarReserva(id_reserva).subscribe(
      () => {
        console.log('Reserva eliminada correctamente');
        // Actualizar la lista de reservas después de eliminar
        this.obtenerTodasReservas();
      },
      (error) => {
        console.error('Error al eliminar reserva:', error);
      }
    );
  }

  

  irAEditarReserva(id_reserva:number) {
    this.router.navigate(['/editar-reserva', id_reserva]);
  }

  
  IrAGuardarReserva() {
    this.router.navigate(['/guardar-reserva']);
  }
 
}
