package com.proyecto.proyectou1distribuidas.controlador;

import com.proyecto.proyectou1distribuidas.entidades.RutaEntidad;
import com.proyecto.proyectou1distribuidas.servicios.RutaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rutas")
public class RutaControlador {

    @Autowired
    public RutaServices services;

    @PostMapping("/insertar/{id_estacion}")
    public RutaEntidad guardarRutaConSuTren(@RequestBody RutaEntidad rutaEntidad, @PathVariable Long id_estacion){
        return services.guardarRutaConSuTren(rutaEntidad,id_estacion);
    }

    @PutMapping("/actualizar/{id_ruta}")
    public RutaEntidad actualizarRuta(@RequestBody RutaEntidad rutaEntidad, @PathVariable Long id_ruta){
        return services.actualizarRuta(rutaEntidad, id_ruta);
    }
    @DeleteMapping("/eliminar/{id_ruta}")
    public void eliminarRuta(@PathVariable Long id_ruta){
        services.eliminarRuta(id_ruta);
    }


    //listarTdos
    @GetMapping("/todos")
    public List<RutaEntidad> obtenerTodos(){
        return services.obtenerTodos();
    }
}
