package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.entidades.RutaEntidad;
import com.proyecto.proyectou1distribuidas.repositorio.RutaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RutaServices {
    @Autowired
    public RutaRepositorio repositorio;

    public RutaServices() {
        this.repositorio = new RutaRepositorio();
    }
    public RutaEntidad guardarRutaConSuTren(RutaEntidad rutaEntidad, Long id_estacion){
        return repositorio.guardarRutaConSuTren(rutaEntidad, id_estacion);
    }

    public RutaEntidad actualizarRuta(RutaEntidad rutaEntidad, Long id_ruta){
        return repositorio.actualizarRuta(rutaEntidad, id_ruta);
    }
    public void eliminarRuta(Long id_ruta){
        repositorio.eliminarRuta(id_ruta);
    }

    public Optional<RutaEntidad> getById(Long id_ruta){
        return repositorio.getById(id_ruta);
    }
    //listarTdos
    public List<RutaEntidad> obtenerTodos(){
        return repositorio.obtenerTodos();
    }

}
