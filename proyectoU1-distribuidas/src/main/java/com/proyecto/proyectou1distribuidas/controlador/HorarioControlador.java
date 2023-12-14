package com.proyecto.proyectou1distribuidas.controlador;

import com.proyecto.proyectou1distribuidas.entidades.HorarioEntidad;
import com.proyecto.proyectou1distribuidas.servicios.HorarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/horarios")
public class HorarioControlador {

    @Autowired
    public HorarioService service;

    @PostMapping(value = "/insertar/{id_ruta}/{id_tren}", consumes = "application/json")
    public HorarioEntidad guardarHorario(@RequestBody HorarioEntidad horarioEntidad,
                                         @PathVariable Long id_ruta,
                                         @PathVariable Long id_tren){

        return service.guardarHorario(horarioEntidad, id_ruta, id_tren);
    }

    //actualizar
    @PutMapping("/actualizar/{id_horario}")
    public HorarioEntidad actualizarHorario(@RequestBody HorarioEntidad horarioEntidad,
                                            @PathVariable Long id_horario){

        return service.actualizarHorario(horarioEntidad,id_horario);
    }

    //eliminar
    @DeleteMapping("/eliminar/{id_horario}")
    public void eliminarHorario(@PathVariable Long id_horario){
        service.eliminarHorario(id_horario);
    }

    //listarTdos
    @GetMapping("/listar/todos")
    public List<HorarioEntidad> obtenerTodos(){
        return service.obtenerTodos();
    }
}
