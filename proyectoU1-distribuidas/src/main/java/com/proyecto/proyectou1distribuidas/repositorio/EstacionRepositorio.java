package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import org.springframework.stereotype.Repository;

import java.util.*;
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

    Optional<EstacionEntidad> getById(Long id_estacion){
        return Optional.ofNullable(estacion.get(id_estacion));
    }
    public EstacionEntidad actualizaEntidad(EstacionEntidad estacionEntidad, Long id_estacion){

        if(estacion.containsKey(id_estacion)){
            //obtener el tren existente por su id
            EstacionEntidad estacionExiste = estacion.get(id_estacion);
            //actualizar la informacion del horario
            estacionExiste.setEstacion_origen(estacionEntidad.getEstacion_origen());
            estacionExiste.setEstacion_destino(estacionEntidad.getEstacion_destino());
            estacionExiste.setNombre_estacion(estacionEntidad.getNombre_estacion());
            estacionExiste.setPlataformas_estacion(estacionEntidad.getPlataformas_estacion());


            estacion.put(id_estacion, estacionExiste);
            return estacionExiste;
        }else{
            throw new IllegalArgumentException("Estacion con ID " + id_estacion + " no encontrado.");
        }
    }


}
