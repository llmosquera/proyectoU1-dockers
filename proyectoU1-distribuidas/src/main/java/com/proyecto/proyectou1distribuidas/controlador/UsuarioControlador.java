package com.proyecto.proyectou1distribuidas.controlador;

import com.proyecto.proyectou1distribuidas.entidades.UsuarioEntidad;
import com.proyecto.proyectou1distribuidas.servicios.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioControlador {
    @Autowired
    public UsuariosService service;

    @PostMapping("/guardar")
    public UsuarioEntidad guardarUsuario(@RequestBody UsuarioEntidad usuarioEntidad) {
        return service.guardarUsuario(usuarioEntidad);
    }

    //obtener por id
    @GetMapping("/obtener/{id_usuario}")
    public UsuarioEntidad getUsuarioById(Long id_usuario){

        return service.getUsuarioById(id_usuario);
    }


    //obtener todos;
    @GetMapping("/obtener")
    public List<UsuarioEntidad> obtenerTodasEstaciones(){
        return service.obtenerTodosUsuarios();
    }

    //metodo para elmiminar
    @DeleteMapping("/eliminar/{id_usuario}")
    public void eliminarEstacion(@PathVariable Long id_usuario){
        service.eliminarUsuario(id_usuario);
    }


    @PutMapping("/actualizar/{id_usuario}")
    public UsuarioEntidad actualizarUsuario(@RequestBody UsuarioEntidad usuarioEntidad,
                                            @PathVariable Long id_usuario){
        return service.actualizar(usuarioEntidad, id_usuario);
    }
}
