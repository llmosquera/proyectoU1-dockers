package com.proyecto.proyectou1distribuidas.controlador;

import com.proyecto.proyectou1distribuidas.entidades.EstacionEntidad;
import com.proyecto.proyectou1distribuidas.servicios.EstacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/estaciones")
public class EstacionControlador {
    @Autowired
    public EstacionService service;

    @PostMapping("/guardar")
    public EstacionEntidad guardarEstacion(@RequestBody EstacionEntidad estacionEntidad) {
        return service.guardarEstacion(estacionEntidad);
    }

    @GetMapping("/obtener")
    private List<EstacionEntidad> obtenerTodasEstaciones(){
        return service.obtenerTodasEstacionesAll();
    }

    @DeleteMapping("/eliminar/{id_estacion}")
    public void eliminarEstacion(@PathVariable Long id_estacion){
        service.eliminarEstacion(id_estacion);
    }


    @PutMapping("/actualizar/{id_estacion}")
    public EstacionEntidad actualizaEntidad(@RequestBody EstacionEntidad estacionEntidad, @PathVariable Long id_estacion){
        return service.actualizaEntidad(estacionEntidad, id_estacion);
    }
}
