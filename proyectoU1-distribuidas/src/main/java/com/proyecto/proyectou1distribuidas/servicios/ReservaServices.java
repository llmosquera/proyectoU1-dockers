package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.repositorio.ReservaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaServices {

    @Autowired
    public ReservaRepositorio repositorio;
}
