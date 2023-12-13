package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class EstacionRepositorio {

    //se utilizará map por la facilidad de acceder a un valor asociado a una clave específica

    private Map<Long, EstacionEntidad> estacion;
    private AtomicLong id_generador;
    
    public EstacionRepositorio() {
        this.estacion = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

}
