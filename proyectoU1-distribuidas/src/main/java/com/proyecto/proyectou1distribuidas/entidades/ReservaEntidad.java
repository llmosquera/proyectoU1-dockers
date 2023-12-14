package com.proyecto.proyectou1distribuidas.entidades;

import lombok.Data;

import java.util.List;

@Data
public class ReservaEntidad {
    private Long id_reserva;

    private String detalle_pasajero;
    private Integer num_asientos_reservados;
    private Boolean estado_reserva;

    //relacion de miuchos a unos con usuario
    private List<UsuarioEntidad> id_usuario;

    //relaion de muchos a unos con horario
    private List<HorarioEntidad> id_horario;
}
