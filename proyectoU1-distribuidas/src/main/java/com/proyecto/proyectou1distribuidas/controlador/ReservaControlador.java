package com.proyecto.proyectou1distribuidas.controlador;

import com.proyecto.proyectou1distribuidas.entidades.ReservaEntidad;
import com.proyecto.proyectou1distribuidas.servicios.ReservaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
public class ReservaControlador {

    @Autowired
    public ReservaServices services;


    @PostMapping("/agregar/{id_usuario}/{id_horario}")
    public ReservaEntidad agregar(@RequestBody ReservaEntidad reservaBilletesEntidad, @PathVariable Long id_usuario, @PathVariable Long id_horario) {
        return services.guardar(reservaBilletesEntidad, id_usuario, id_horario);
    }

    @GetMapping("/listar")
    public List<ReservaEntidad> listar(){
        return services.obtenerTodas();
    }

    @PutMapping("/editar/{id_reserva}")
    public ReservaEntidad editar(@RequestBody ReservaEntidad reservaEntidad, @PathVariable Long id_reserva){
        return services.actualizar(reservaEntidad, id_reserva);
    }

    @DeleteMapping("/eliminar/{id_reserva}")
    public void eliminar(@PathVariable Long id_reserva){
        services.eliminar(id_reserva);
    }
}
