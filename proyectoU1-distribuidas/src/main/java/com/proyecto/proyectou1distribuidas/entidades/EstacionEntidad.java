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

    //relacion de uno a muhcos con ruta y tre
    private RutaEntidad rutaEntidad;

    //relacion de uno a muchos con tren
    private TrenEntidad trenEntidad;
}
