package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.entidades.HorarioEntidad;
import com.proyecto.proyectou1distribuidas.repositorio.HorarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HorarioService {

    @Autowired
    public HorarioRepositorio repositorio;

    public HorarioService() {
        this.repositorio = new HorarioRepositorio();
    }
    public HorarioEntidad guardarHorario(HorarioEntidad horarioEntidad,
                                         Long id_ruta, Long id_tren){

        return repositorio.guardarHorario(horarioEntidad,id_ruta,id_tren);
    }

    //actualizar
    public HorarioEntidad actualizarHorario(HorarioEntidad horarioEntidad, Long id_horario){

        return repositorio.actualizarHorario(horarioEntidad, id_horario);
    }

    //eliminar
    public void eliminarHorario(Long id_horario){
        repositorio.eliminarHorario(id_horario);
    }

    public Optional<HorarioEntidad> getById(Long id_horario){
        return repositorio.getById(id_horario);
    }
    //listarTdos
    public List<HorarioEntidad> obtenerTodos(){
        return repositorio.obtenerTodos();
    }
}
