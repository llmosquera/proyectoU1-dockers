package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstacionService {

    @Autowired
    public EstacionService repositorio;

    public EstacionService() {
        this.repositorio = new EstacionService();
    }
    public EstacionEntidad guardarEstacion(EstacionEntidad estacionEntidad) {
        return repositorio.guardarEstacion(estacionEntidad);
    }

    public EstacionEntidad getEstacionById(Long id_estacion){

        return repositorio.getEstacionById(id_estacion);
    }

    public List<EstacionEntidad> obtenerTodasEstacionesAll(){
        return repositorio.obtenerTodasEstacionesAll();
    }

    //metodo para elmiminar
    public void eliminarEstacion(Long id_estacion){
        repositorio.eliminarEstacion(id_estacion);
    }



    Optional<EstacionEntidad> getById(Long id_estacion){
        return repositorio.getById(id_estacion);
    }
    public EstacionEntidad actualizaEntidad(EstacionEntidad estacionEntidad, Long id_estacion) {
        return repositorio.actualizaEntidad(estacionEntidad, id_estacion);
    }
}
