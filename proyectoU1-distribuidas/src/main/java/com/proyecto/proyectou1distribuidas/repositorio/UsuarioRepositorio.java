package com.proyecto.proyectou1distribuidas.repositorio;

import com.proyecto.proyectou1distribuidas.entidades.UsuarioEntidad;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class UsuarioRepositorio {
    private Map<Long, UsuarioEntidad> usuarios;
    private AtomicLong id_generador;

    public UsuarioRepositorio() {
        this.usuarios = new HashMap<>();
        this.id_generador = new AtomicLong(0);
    }
    public UsuarioEntidad guardarUsuario(UsuarioEntidad usuarioEntidad) {
        if (usuarioEntidad.getId_usuario() != null) {
            //la estacion ya tiene un id, por lo tanto es una actualizacion
            if (usuarios.containsKey(usuarioEntidad.getId_usuario())) {

                //reemplazar la estacion
                usuarios.put(usuarioEntidad.getId_usuario(), usuarioEntidad);
                return usuarioEntidad;
            } else {
                throw new IllegalArgumentException("Estacion no encontrado para el ID: " + usuarioEntidad.getId_usuario());
            }
        } else {
            long id_usuario = id_generador.incrementAndGet();
            usuarioEntidad.setId_usuario(id_usuario);
            usuarios.put(id_usuario, usuarioEntidad);
            return usuarioEntidad;
        }
    }
    public UsuarioEntidad getUsuarioById(Long id_usuario){

        UsuarioEntidad entidad = usuarios.get(id_usuario);
        return entidad;
    }

    //obtener todos;
    public List<UsuarioEntidad> obtenerTodasUsuario(){
        return new ArrayList<>(usuarios.values());
    }

    //metodo para elmiminar
    public void eliminarUsuario(Long id_usuario){
        usuarios.remove(id_usuario);
    }
    public Optional<UsuarioEntidad> getById(Long id_usuario){
        return Optional.ofNullable(usuarios.get(id_usuario));
    }

}
