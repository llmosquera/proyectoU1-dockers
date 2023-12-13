package com.proyecto.proyectou1distribuidas.entidades;

import lombok.Data;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Data
public class HorarioEntidad {

    private Long id_horario;
    private LocalDate dias_semana;
    private Time hora_salida;
    private Time hora_llegada;


    //relacion de muchos a uno con ruta
    private List<RutaEntidad> id_ruta;
    //relacion de muchos a uno con tren
    private List<TrenEntidad> id_tren;
}
