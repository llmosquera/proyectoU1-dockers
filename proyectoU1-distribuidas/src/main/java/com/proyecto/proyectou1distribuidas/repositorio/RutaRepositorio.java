package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.RutaEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class RutaRepositorio {

    @Autowired
    public EstacionRepositorio repositorio;

    private Map<Long, RutaEntidad> rutas;
    private AtomicLong id_generador;
    public RutaRepositorio() {
        this.rutas = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

}
