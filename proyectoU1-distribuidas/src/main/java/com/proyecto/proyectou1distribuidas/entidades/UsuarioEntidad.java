package com.proyecto.proyectou1distribuidas.entidades;

import lombok.Data;

@Data
public class UsuarioEntidad {
    private Long id_usuario;
    private String nombre_usuario;
    private String contrasenia_usuario;
    private String rol_usuario;

    //relacion de muchos a unos
    private ReservaEntidad reservaBilletesEntidad;

}
