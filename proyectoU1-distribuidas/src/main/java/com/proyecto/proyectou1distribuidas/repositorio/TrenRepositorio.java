package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import com.proyecto.proyectou1distribuidas.entidades.TrenEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Repository

public class TrenRepositorio {

    @Autowired
    public EstacionRepositorio repositorio;

    private Map<Long, TrenEntidad> trenes;
    private AtomicLong id_generador;
    public TrenRepositorio() {
        this.trenes = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

    public TrenEntidad guardarTrenConEstacion(TrenEntidad trenEntidad, Long id_estacion){


        Optional<EstacionEntidad> estacionOptional = repositorio.getById(id_estacion);

        if(estacionOptional.isPresent()){
            EstacionEntidad estacion = estacionOptional.get();
            if (trenEntidad.getId_estacion() == null) {
                trenEntidad.setId_estacion(new ArrayList<>());
            }
            //asiganar la reacion al tren
            trenEntidad.getId_estacion().add(estacion);

            //guardar el tren en el repositorio
            Long id_tren = id_generador.incrementAndGet();
            trenEntidad.setId_tren(id_tren);
            trenes.put(id_tren,trenEntidad);
            return trenEntidad;
        }else{
            throw new IllegalArgumentException("Estación con ID " + id_estacion + " no encontrada.");

        }


    }

    //actualizar
    public TrenEntidad actualizarTren(TrenEntidad trenEntidad, Long id_tren){
        if(trenes.containsKey(id_tren)){
            //obtener el tren existente por su id
            TrenEntidad trenExiste = trenes.get(id_tren);
            trenExiste.setModelo_tren(trenEntidad.getModelo_tren());
            trenExiste.setCapacidad(trenEntidad.getCapacidad());
            trenExiste.setEstado(trenEntidad.getEstado());
            trenes.put(id_tren,trenExiste);
            return trenExiste;
        }else{
            throw new IllegalArgumentException("Tren con ID " + id_tren + " no encontrado.");

        }
    }

    public void eliminarTren(Long id_tren){
        trenes.remove(id_tren);
    }

    public Optional<TrenEntidad> getById(Long id_tren){
        return Optional.ofNullable(trenes.get(id_tren));
    }
    //listarTdos
    public List<TrenEntidad> obtenerTodos(){
        return new ArrayList<>(trenes.values());
    }
}
