import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from 'src/app/interfaces/Cliente';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClienteModule {


  public static clientes: Cliente[] = [
    {
      cedula: '0954184750',
      nombre: 'Kevin',
      apellido: 'Lamilla Vera',
      direccion: 'La alegria',
      telefono: '0983054921',
      correo: 'kevinlamilla16@gmail.com',
      ciudad : 'GUAYAS',
      estado: 'Activo'
    },
    {
      cedula: '1111111111',
      nombre: 'Josi Maria',
      apellido: 'Zambrano Ruiz',
      direccion: 'La alegria',
      telefono: '0983054921',
      correo: 'ZambranoRuiz@gmail.com',
      ciudad : 'QUITO',
      estado: 'Activo'
    },
    {
      cedula: '22222222222',
      nombre: 'Alberto',
      apellido: 'Paez',
      direccion: 'La octaba avenida',
      telefono: '0983054921',
      correo: 'ZambranoRuiz@gmail.com',
      ciudad : 'CUENCA',
      estado: 'Activo'
    },

    {
      cedula: '22222222222',
      nombre: 'Alberto',
      apellido: 'Paez',
      direccion: 'La octaba avenida',
      telefono: '0983054921',
      correo: 'ZambranoRuiz@gmail.com',
      ciudad : 'CUENCA',
      estado: 'Inactivo'
    },
    
  ];

 

}
