package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.HorarioEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public class HorarioRepositorio {

    @Autowired
    public RutaRepositorio rutaRepositorio;
    @Autowired
    public TrenRepositorio trenRepositorio;

    private Map<Long, HorarioEntidad> horarios;

}
