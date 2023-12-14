package com.proyecto.proyectou1distribuidas.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstacionService {

    @Autowired
    public EstacionService repositorio;

    public EstacionService() {
        this.repositorio = new EstacionService();
    }

}
