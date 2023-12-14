package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.HorarioEntidad;
import com.proyecto.proyectou1distribuidas.entidades.ReservaEntidad;
import com.proyecto.proyectou1distribuidas.entidades.UsuarioEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class ReservaRepositorio {

    @Autowired
    public HorarioRepositorio horarioRepositorio;
    @Autowired
    public UsuarioRepositorio usuarioRepositorio;

    private Map<Long, ReservaEntidad> reservas;

    private AtomicLong id_generador;

    public ReservaRepositorio() {
        this.reservas = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

    public ReservaEntidad guardar(ReservaEntidad reserva,
                                  Long id_usuario,
                                  Long id_horario) {
        // Obtener el usuario y el horario por sus respectivos IDs
        UsuarioEntidad usuario = usuarioRepositorio.getById(id_usuario).orElse(null);
        HorarioEntidad horario = horarioRepositorio.getById(id_horario).orElse(null);

        if (usuario == null || horario == null) {
            // Manejar el caso en el que el usuario o el horario no existen
            return null;
        }

        // Asignar el usuario y el horario a la reserva
        reserva.setId_usuario(List.of(usuario));
        reserva.setId_horario(List.of(horario));

        // Asignar un ID único a la reserva (si no tiene uno)
        if (reserva.getId_reserva() == null) {
            long idReserva = id_generador.incrementAndGet();
            reserva.setId_reserva(idReserva);
        }

        // Guardar la reserva en algún repositorio o estructura de datos en memoria
        // Dependiendo de tu implementación, podrías usar un mapa, lista, etc.
        reservas.put(reserva.getId_reserva(), reserva);

        // Devolver la reserva creada o actualizada
        return reserva;
    }


    //Actualizar reservas
    public ReservaEntidad actualizar(ReservaEntidad reservaEntidad, Long id_reserva){
        if(reservas.containsKey(id_reserva)){
            //obtener el tren existente por su id
            ReservaEntidad reservaExiste = reservas.get(id_reserva);
            //actualizar la informacion del horario
            reservaExiste.setEstado_reserva(reservaEntidad.getEstado_reserva());
            reservaExiste.setDetalle_pasajero(reservaExiste.getDetalle_pasajero());
            reservaExiste.setNum_asientos_reservados((reservaEntidad.getNum_asientos_reservados()));

            reservas.put(id_reserva, reservaExiste);
            return reservaExiste;
        }else{
            throw new IllegalArgumentException("Horario con ID " + id_reserva + " no encontrado.");
        }
    }
    public List<ReservaEntidad> obtenerTodas(){
        return new ArrayList<>(reservas.values());
    }

    public Optional<ReservaEntidad> getById(Long id_reserva){
        return Optional.ofNullable(reservas.get(id_reserva));
    }


    public void eliminar (Long id_reserva){
        reservas.remove(id_reserva);
    }


}
