package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.repositorio.HorarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HorarioService {

    @Autowired
    public HorarioRepositorio repositorio;

    public HorarioService() {
        this.repositorio = new HorarioRepositorio();
    }
}
