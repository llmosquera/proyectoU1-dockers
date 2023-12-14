package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.entidades.ReservaEntidad;
import com.proyecto.proyectou1distribuidas.repositorio.ReservaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaServices {

    @Autowired
    public ReservaRepositorio repositorio;

    public ReservaEntidad guardar(ReservaEntidad reserva,
                                  Long id_usuario,
                                  Long id_horario) {
        // Obtener el usuario y el horario por sus respectivos IDs
        return repositorio.guardar(reserva, id_usuario, id_horario);
    }


    //Actualizar reservas
    public ReservaEntidad actualizar(ReservaEntidad reservaEntidad, Long id_reserva){
        return repositorio.actualizar(reservaEntidad, id_reserva);
    }

    public List<ReservaEntidad> obtenerTodas(){
        return repositorio.obtenerTodas();
    }

    public Optional<ReservaEntidad> getById(Long id_reserva){
        return repositorio.getById(id_reserva);
    }
    public void eliminar (Long id_reserva){
        repositorio.eliminar(id_reserva);
    }
}
