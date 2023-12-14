package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.HorarioEntidad;
import com.proyecto.proyectou1distribuidas.entidades.RutaEntidad;
import com.proyecto.proyectou1distribuidas.entidades.TrenEntidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class HorarioRepositorio {

    @Autowired
    public RutaRepositorio rutaRepositorio;
    @Autowired
    public TrenRepositorio trenRepositorio;

    private Map<Long, HorarioEntidad> horarios;
    private AtomicLong id_generador;
    public HorarioRepositorio() {
        this.horarios = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }

    public HorarioEntidad guardarHorario(HorarioEntidad horarioEntidad,
                                         Long id_ruta, Long id_tren){

        //obtener la ruta y el tren pos sus IDs
        RutaEntidad ruta = rutaRepositorio.getById(id_ruta).orElseThrow(() ->
                new RuntimeException("Ruta con ID " + id_ruta + " no encontrada."));
        TrenEntidad tren = trenRepositorio.getById(id_tren)
                .orElseThrow(() -> new IllegalArgumentException("Tren con ID " + id_tren + " no encontrado."));

        // Inicializar las listas si son nulas
        if (horarioEntidad.getId_ruta() == null) {
            horarioEntidad.setId_ruta(new ArrayList<>());
        }
        if (horarioEntidad.getId_tren() == null) {
            horarioEntidad.setId_tren(new ArrayList<>());
        }

        //asiganar la ruta y el tren al horario
        horarioEntidad.getId_ruta().add(ruta);
        horarioEntidad.getId_tren().add(tren);
        // Generar un nuevo ID para el horario
        Long idHorario = id_generador.incrementAndGet();
        horarioEntidad.setId_horario(idHorario);
        // Guardar el horario en el repositorio
        horarios.put(idHorario, horarioEntidad);
        return horarioEntidad;
    }

    public HorarioEntidad actualizarHorario(HorarioEntidad horarioEntidad, Long id_horario){

        if(horarios.containsKey(id_horario)){
            //obtener el tren existente por su id
            HorarioEntidad horarioExiste = horarios.get(id_horario);
            //actualizar la informacion del horario
            horarioExiste.setDias_semana(horarioEntidad.getDias_semana());
            horarioExiste.setHora_salida(horarioEntidad.getHora_salida());
            horarioExiste.setHora_llegada(horarioEntidad.getHora_llegada());

            horarios.put(id_horario, horarioExiste);
            return horarioExiste;
        }else{
            throw new IllegalArgumentException("Horario con ID " + id_horario + " no encontrado.");
        }
    }
    public void eliminarHorario(Long id_horario){
        horarios.remove(id_horario);
    }
    public Optional<HorarioEntidad> getById(Long id_horario){
        return Optional.ofNullable(horarios.get(id_horario));
    }
    //
}
