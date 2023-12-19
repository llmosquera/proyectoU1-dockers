import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionComponent } from './estacion/estacion.component';  // Reemplaza con la ruta correcta
import { GuardarEstacionComponent } from './estacion/guardar-estacion/guardar-estacion.component';
import { EditarEstacionComponent } from './estacion/editar-estacion/editar-estacion.component';
import { TrenComponent } from './tren/tren.component';
import { GuardarTrenComponent } from './tren/guardar-tren/guardar-tren.component';
import { EditarTrenComponent } from './tren/editar-tren/editar-tren.component';
import { RutaComponent } from './ruta/ruta.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GuardarUsuarioComponent } from './usuarios/guardar-usuario/guardar-usuario.component';
import { GuardarRutaComponent } from './ruta/guardar-ruta/guardar-ruta.component';
import { EditarRutaComponent } from './ruta/editar-ruta/editar-ruta.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { HorarioComponent } from './horario/horario.component';
import { EditarHorarioComponent } from './horario/editar-horario/editar-horario.component';
import { GuardarHorarioComponent } from './horario/guardar-horario/guardar-horario.component';
import { ReservaBilletesComponent } from './reserva-billetes/reserva-billetes.component';
import { GuardarReservaBilletesComponent } from './reserva-billetes/guardar-reserva-billetes/guardar-reserva-billetes.component';
import { EditarReservaBilletesComponent } from './reserva-billetes/editar-reserva-billetes/editar-reserva-billetes.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'estaciones', component: EstacionComponent },
  { path: 'guardar-estacion', component: GuardarEstacionComponent },
  { path: 'editar-estacion/:id_estacion', component: EditarEstacionComponent },
  { path: 'trenes', component: TrenComponent },
  { path: 'guardar-tren', component: GuardarTrenComponent },
  { path: 'editar-tren/:id_tren', component: EditarTrenComponent },
  { path: 'rutas', component: RutaComponent },
  {path:  'guardar-ruta', component: GuardarRutaComponent},
  {path:  'editar-ruta/:id_ruta', component: EditarRutaComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'guardar-usuario', component:GuardarUsuarioComponent},
  {path:'editar-usuario/:id_usuario', component:EditarUsuariosComponent},
  {path:'horarios', component:HorarioComponent},
  {path:'guardar-horario', component:GuardarHorarioComponent},
  {path:'editar-horario/:id_horario', component:EditarHorarioComponent},
  {path:'reservas', component:ReservaBilletesComponent},
  {path:'guardar-reserva', component:GuardarReservaBilletesComponent},
  {path:'editar-reserva/:id_reserva', component:EditarReservaBilletesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
