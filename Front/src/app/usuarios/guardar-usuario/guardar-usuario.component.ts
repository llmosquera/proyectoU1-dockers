import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-usuario',
  templateUrl: './guardar-usuario.component.html',
  styleUrls: ['./guardar-usuario.component.css']
})
export class GuardarUsuarioComponent implements OnInit {
  usuarios: Usuarios = new Usuarios();
  constructor(private httpUsuarios: UsuariosService, private router: Router) { }

  ngOnInit() { }


  //metodo paar guardar
  //Método para guardar
  public guardarUsuario() {
    if (this.validarFormulario()) {
      this.httpUsuarios.guardarUsuario(this.usuarios).subscribe({
        next: (datos) => {
          // Ir a la otra página
          this.irListaUsuarios();
        },
      });
    }
  }
  irListaUsuarios() {
    this.router.navigate(["/usuarios"])
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
