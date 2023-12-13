package com.proyecto.proyectou1distribuidas.entidades;

import lombok.Data;

@Data
public class EstacionEntidad {
    private Long id_estacion;
    private String nombre_estacion;
    private String ubicacion_estacion;
    private String plataformas_estacion;
    private String estacion_origen;
    private String estacion_destino;
}
