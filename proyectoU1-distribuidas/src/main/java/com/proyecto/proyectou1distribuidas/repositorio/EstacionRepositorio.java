package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class EstacionRepositorio {

    //se utilizará map por la facilidad de acceder a un valor asociado a una clave específica

    private Map<Long, EstacionEntidad> estacion;
    private AtomicLong id_generador;

    public EstacionRepositorio() {
        this.estacion = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

    //metodo para guardar una estacion
    public EstacionEntidad guardarEstacion(EstacionEntidad estacionEntidad){
        if(estacionEntidad.getId_estacion() !=null){
            //la estacion ya tiene un id, por lo tanto es uina actualizacion
            if(estacion.containsKey(estacionEntidad.getId_estacion())){
                //reemplazar la estacion
                estacion.put(estacionEntidad.getId_estacion(), estacionEntidad);
                return estacionEntidad;
            }else {
                throw new IllegalArgumentException("Estacion no encontrado para el ID: " + estacionEntidad.getId_estacion());
            }
        }else {
            long id_estacion = id_generador.incrementAndGet();
            estacionEntidad.setId_estacion(id_estacion);
            estacion.put(id_estacion, estacionEntidad);
            return estacionEntidad;
        }
    }

    //metodo para obtener por Id
    public EstacionEntidad getEstacionById(Long id_estacion){

        EstacionEntidad entidad = estacion.get(id_estacion);
        return entidad;
    }

    //obtener todos;
    private List<EstacionEntidad> obtenerTodasEstaciones(){
        return new ArrayList<>(estacion.values());
    }


    //metodo para elmiminar
    public void eliminarEstacion(Long id_estacion){
        estacion.remove(id_estacion);
    }

    

}
