package com.proyecto.proyectou1distribuidas.entidades;

import lombok.Data;

import java.util.List;

@Data
public class TrenEntidad {

    private Long id_tren;
    private String modelo_tren;
    private String capacidad;
    private Boolean estado;

    private List<EstacionEntidad> id_estacion;
}
