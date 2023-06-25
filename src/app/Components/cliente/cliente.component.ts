import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClienteModule } from 'src/app/modules/cliente/Cliente.module';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  constructor(public dialog:MatDialog,private route:Router){}
  Actualstatus="listar";

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'direccion', 'telefono', 'correo', 'ciudad','estado'];

  dataSource:any=[];

  clienteObject=ClienteModule.clientes;

  filtroEstado: string = 'todos'; // Valor inicial del filtro
  
  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<Cliente>(this.clienteObject as Cliente[]);
  }

  estado(estatus:string){
    this.Actualstatus=estatus;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  } 

  filtrarClientes() {
    if (this.filtroEstado === "todos") {
      this.dataSource = ClienteModule.clientes;
    } else if (this.filtroEstado === "Activo") {
      this.dataSource = new MatTableDataSource<Cliente>(ClienteModule.clientes.filter(alumno => alumno.estado === "Activo"));
    } else if (this.filtroEstado === "Inactivo") {
      this.dataSource = ClienteModule.clientes.filter(alumno => alumno.estado === "Inactivo");
    }
  }
  
} 
