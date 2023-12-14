package com.proyecto.proyectou1distribuidas.repositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RutaRepositorio {

    @Autowired
    public EstacionRepositorio repositorio;

}
