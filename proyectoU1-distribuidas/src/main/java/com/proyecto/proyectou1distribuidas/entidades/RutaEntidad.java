package com.proyecto.proyectou1distribuidas.entidades;

import lombok.Data;

import java.util.List;

@Data
public class RutaEntidad {

    private Long id_ruta;
    private String descripcion;
    private String duracion_estimada;

    //relacacion de muchos a uno con estacion
    private List<EstacionEntidad> id_estacion;
}
