import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModule } from 'src/app/modules/cliente/Cliente.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent {
  formReactive: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formReactive = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      apellido: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      direccion: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      correo: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]],
      ciudad: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      estado: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]]
    });
  }
  
  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  telefono: string = '';
  correo:string = '';
  ciudad:string = '';
  estado: string = '';

  Actualstatus = 'agregar';
  
  dataSource: any = [];

  
  onSubmit() {
    let nuevo = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      direccion :this.direccion,
      telefono : this.telefono,
      correo: this.correo,
      ciudad: this.ciudad,
      estado: this.estado
    };
  
    ClienteModule.clientes.push(nuevo);
    
    Swal.fire({
      title: 'OPERACIÓN EXITOSA',
      text: 'Usted ha insertado al cliente',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  
    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.direccion='';
    this.telefono='';
    this.correo='';
    this.ciudad='';
    this.estado='';
    
  }
  
  
  getValue(value:string){
    return this.formReactive.get(value)
  }

  abrirVentana(input: string) {
    if (input == "nombre") {
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El nombre no debe tener más de 20 caracteres y no debe incluir números. Ejemplo: Merlin",
        "error"
      );
    } else if (input == "apellido") {
      Swal.fire(
        "APELLIDO INCORRECTO !",
        "El apellido no debe tener más de 20 caracteres y no debe incluir números. Ejemplo:  Tumbaco",
        "error"
      );
    } else if (input == "cedula") {
      Swal.fire(
        "CÉDULA INCORRECTA !",
        "Ingrese correctamente su cédula. Ejemplo: 1712345678",
        "error"
      );
    } else if (input == "direccion") {
      Swal.fire(
        "ASIGNATURA INCORRECTA !",
        "Debe llenar este campo con la direccion.",
        "error"
      );
    } else if (input == "telefono") {
      Swal.fire(
        "NOTA INCORRECTA !",
        "Ingrese el numero de telefono .",
        "error"
      );
    } else if (input == "correo") {
      Swal.fire(
        "NOTA INCORRECTA !",
        "Ingrese una direccion de correo electronico .",
        "error"
      );

    } else if (input == "ciudad") {
      Swal.fire(
        "NOTA INCORRECTA !",
        "Ingrese una cuidad correcta .",
        "error"
      );

    } else if (input == "estado") {
      Swal.fire(
        "NOTA INCORRECTA !",
        "Ingrese un estado .",
        "error"
      );
    }
  }
  
}