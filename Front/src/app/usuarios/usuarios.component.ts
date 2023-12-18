import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';
import { UsuariosService } from './usuarios.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy{
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();
  usuarios:Usuarios[];

  constructor(private serviceUsuarios:UsuariosService, private enrutador:Router){}
  ngOnInit(){
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    this.listarUsuarios();
  }

  //metodo para listar
  public listarUsuarios(){
    this.serviceUsuarios.listarUsuarios().subscribe(
      (datos)=>{
        this.usuarios=datos;
        console.log(datos);
        this.dtTrigger.next(this.dtOptions);
        this.dtTrigger.unsubscribe(); // Desactivar DataTables

      }
    )
  }

  editarUsuario(id_usuario:number){
    this.enrutador.navigate(['editar-usuario',id_usuario])
  }

  eliminarUsuarios(id_usuario: number) {
    this.serviceUsuarios.eliminarUsuario(id_usuario).subscribe(
      () => {
        console.log('Usuario eliminada correctamente');
       
        this.listarUsuarios();
      },
      (error) => {
        console.error('Error al eliminar estación:', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


 

}
