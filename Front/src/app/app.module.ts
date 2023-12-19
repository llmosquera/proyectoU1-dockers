import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EstacionComponent } from './estacion/estacion.component';
import { GuardarEstacionComponent } from './estacion/guardar-estacion/guardar-estacion.component';
import { EditarEstacionComponent } from './estacion/editar-estacion/editar-estacion.component';
import { RutaComponent } from './ruta/ruta.component';
import { EditarRutaComponent } from './ruta/editar-ruta/editar-ruta.component';
import { GuardarRutaComponent } from './ruta/guardar-ruta/guardar-ruta.component';
import { TrenComponent } from './tren/tren.component';
import { EditarTrenComponent } from './tren/editar-tren/editar-tren.component';
import { GuardarTrenComponent } from './tren/guardar-tren/guardar-tren.component';
import { HttpClientModule } from '@angular/common/http';  // Ajuste aquí
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GuardarUsuarioComponent } from './usuarios/guardar-usuario/guardar-usuario.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { HorarioComponent } from './horario/horario.component';
import { EditarHorarioComponent } from './horario/editar-horario/editar-horario.component';
import { GuardarHorarioComponent } from './horario/guardar-horario/guardar-horario.component';
import { ReservaBilletesComponent } from './reserva-billetes/reserva-billetes.component';
import { EditarReservaBilletesComponent } from './reserva-billetes/editar-reserva-billetes/editar-reserva-billetes.component';
import { GuardarReservaBilletesComponent } from './reserva-billetes/guardar-reserva-billetes/guardar-reserva-billetes.component';

@NgModule({
  declarations: [
    AppComponent,
    EstacionComponent,
    GuardarEstacionComponent,
    EditarEstacionComponent,
    RutaComponent,
    EditarRutaComponent,
    GuardarRutaComponent,
    TrenComponent,
    EditarTrenComponent,
    GuardarTrenComponent,
    UsuariosComponent,
    GuardarUsuarioComponent,
    EditarUsuariosComponent,
    HorarioComponent,
    EditarHorarioComponent,
    GuardarHorarioComponent,
    ReservaBilletesComponent,
    EditarReservaBilletesComponent,
    GuardarReservaBilletesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
