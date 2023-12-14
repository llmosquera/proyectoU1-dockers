package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.entidades.TrenEntidad;
import com.proyecto.proyectou1distribuidas.repositorio.TrenRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrenServices {

    @Autowired
    public TrenRepositorio repositorio;

    public TrenServices() {
        this.repositorio = new TrenRepositorio();
    }

    public TrenEntidad guardarTrenConEstacion(TrenEntidad trenEntidad, Long id_estacion){

        return  repositorio.guardarTrenConEstacion(trenEntidad, id_estacion);
    }

    public TrenEntidad actualizarTren(TrenEntidad trenEntidad, Long id_tren){
        return repositorio.actualizarTren(trenEntidad, id_tren);
    }

    public void eliminarTren(Long id_tren){
        repositorio.eliminarTren(id_tren);
    }

    public Optional<TrenEntidad> getById(Long id_tren){
        return repositorio.getById(id_tren);
    }
    //listarTdos
    public List<TrenEntidad> obtenerTodos(){
        return repositorio.obtenerTodos();
    }
}
