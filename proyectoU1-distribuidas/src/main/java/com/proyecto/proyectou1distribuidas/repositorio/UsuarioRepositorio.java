package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.UsuarioEntidad;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class UsuarioRepositorio {
    private Map<Long, UsuarioEntidad> usuarios;
    private AtomicLong id_generador;

    public UsuarioRepositorio() {
        this.usuarios = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }
}
