import { Component } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent {
  usuarios:Usuarios = new Usuarios();
  

  constructor(private usuarioService:UsuariosService, private enruta:ActivatedRoute, private router:Router){}

  ngOnInit(): void {

    const id_usuario = this.enruta.snapshot.params['id_usuario'];


    this.usuarioService.obtenerUsuarioPorId(id_usuario).subscribe(
      (estacionObtenida) => {
        this.usuarios = estacionObtenida;
      },
      (error) => {
        console.error('Error al obtener la estación:', error);
      }
    );
  }

  editarUsuario(id_usuario: number) {
    if(this.validarFormulario()){
      this.usuarioService.actualizarUsuario(this.usuarios, id_usuario).subscribe(
        (estacionActualizada) => {
          console.log('Estación actualizada correctamente:', estacionActualizada);
          this.irListaUsuarios();
        },
        (error) => {
          console.error('Error al actualizar la estación:', error);
        });
      }
    }
  irListaUsuarios(){
    this.router.navigate(['/usuarios'])

  }

  validarFormulario(): boolean {
    // Validación de campos vacíos
    if (
      !this.usuarios.nombre_usuario ||
      !this.usuarios.contrasenia_usuario ||
      !this.usuarios.rol_usuario
    ) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return false;
    }

    // Validación de solo texto en nombre_usuario
    const soloTextoRegex = /^[a-zA-Z\s]*$/;

    if (!soloTextoRegex.test(this.usuarios.nombre_usuario)) {
      Swal.fire('Error', 'Solo se permiten letras en el nombre de usuario', 'error');
      return false;
    }

    // Validación de contraseña
    // Validación de contraseña (exactamente 6 caracteres)
const contraseniaRegex = /^(?=.*[A-Z])(?=.*\W).{6}$/;

if (!contraseniaRegex.test(this.usuarios.contrasenia_usuario)) {
  Swal.fire('Error', 'La contraseña debe tener exactamente 6 caracteres, comenzar con una letra mayúscula y terminar con un carácter especial (*)', 'error');
  return false;
}


    return true;
  }
}
