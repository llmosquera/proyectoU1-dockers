package com.proyecto.proyectou1distribuidas.servicios;

import com.proyecto.proyectou1distribuidas.entidades.UsuarioEntidad;
import com.proyecto.proyectou1distribuidas.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuariosService {
    @Autowired
    public UsuarioRepositorio repositorio;

    public UsuariosService() {
        this.repositorio = new UsuarioRepositorio();
    }

    //metodo para guuardar
    public UsuarioEntidad guardarUsuario(UsuarioEntidad usuarioEntidad) {
        return repositorio.guardarUsuario(usuarioEntidad);
    }

    //obtener por id
    public UsuarioEntidad getUsuarioById(Long id_usuario){

        return repositorio.getUsuarioById(id_usuario);
    }

    //obtener todos;
    public List<UsuarioEntidad> obtenerTodosUsuarios(){
        return repositorio.obtenerTodasUsuario();
    }

    //metodo para elmiminar
    public void eliminarUsuario(Long id_usuario){
        repositorio.eliminarUsuario(id_usuario);
    }



    public Optional<UsuarioEntidad> getById(Long id_usuario){
        return repositorio.getById(id_usuario);
    }

    public UsuarioEntidad actualizar(UsuarioEntidad entidad, Long id_usuario){
        return repositorio.actualizar(entidad, id_usuario);
    }
}
