package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import com.proyecto.proyectou1distribuidas.entidades.RutaEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class RutaRepositorio {

    @Autowired
    public EstacionRepositorio repositorio;

    private Map<Long, RutaEntidad> rutas;
    private AtomicLong id_generador;
    public RutaRepositorio() {
        this.rutas = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

    public RutaEntidad guardarRutaConSuTren(RutaEntidad rutaEntidad, Long id_estacion){


        Optional<EstacionEntidad> estacionOptional = repositorio.getById(id_estacion);

        if(estacionOptional.isPresent()){
            EstacionEntidad estacion = estacionOptional.get();

            if (rutaEntidad.getId_estacion() == null) {
                rutaEntidad.setId_estacion(new ArrayList<>());
            }
            //asiganar la reacion al tren
            rutaEntidad.getId_estacion().add(estacion);

            //guardar el tren en el repositorio
            Long id_ruta = id_generador.incrementAndGet();
            rutaEntidad.setId_ruta(id_ruta);
            rutas.put(id_ruta,rutaEntidad);
            return rutaEntidad;
        }else{
            throw new IllegalArgumentException("Ruta con ID " + id_estacion + " no encontrada.");

        }
    }

}
