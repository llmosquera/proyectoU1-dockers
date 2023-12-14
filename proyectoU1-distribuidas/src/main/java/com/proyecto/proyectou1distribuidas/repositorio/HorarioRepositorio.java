package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.HorarioEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class HorarioRepositorio {

    @Autowired
    public RutaRepositorio rutaRepositorio;
    @Autowired
    public TrenRepositorio trenRepositorio;

    private Map<Long, HorarioEntidad> horarios;
    private AtomicLong id_generador;
    public HorarioRepositorio() {
        this.horarios = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }
}
