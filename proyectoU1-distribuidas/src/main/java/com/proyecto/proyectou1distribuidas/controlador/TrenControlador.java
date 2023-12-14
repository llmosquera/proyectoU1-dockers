package com.proyecto.proyectou1distribuidas.controlador;

import com.proyecto.proyectou1distribuidas.entidades.TrenEntidad;
import com.proyecto.proyectou1distribuidas.servicios.TrenServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tren")
public class TrenControlador {
    @Autowired
    public TrenServices services;

    @PostMapping("/insertar/{id_estacion}")
    public TrenEntidad guardarTrenConEstacion(@RequestBody TrenEntidad trenEntidad,
                                              @PathVariable Long id_estacion){

        return  services.guardarTrenConEstacion(trenEntidad, id_estacion);
    }

    @PutMapping("/actualizar/{id_tren}")
    public TrenEntidad actualizarTren(@RequestBody TrenEntidad trenEntidad, @PathVariable Long id_tren){
        return services.actualizarTren(trenEntidad, id_tren);
    }

    @DeleteMapping("/eliminar/{id_tren}")
    public void eliminarTren(@PathVariable Long id_tren){
        services.eliminarTren(id_tren);
    }

    //listarTdos
    @GetMapping("/listar")
    public List<TrenEntidad> obtenerTodos(){
        return services.obtenerTodos();
    }
}
