package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.TrenEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Repository

public class TrenRepositorio {

    @Autowired
    public EstacionRepositorio repositorio;

    private Map<Long, TrenEntidad> trenes;
    private AtomicLong id_generador;
}
