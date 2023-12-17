import { Component, OnInit } from '@angular/core';
import { ScostosService } from '../../../../../Services/servcostos/scostos.service';
import { CostoVariable } from '../../../../../Interfaz/costos'; // Asegúrate de que la ruta es correcta


@Component({
  selector: 'app-totcostosvariables',
  templateUrl: './totcostosvariables.component.html',
  styleUrls: ['./totcostosvariables.component.css']
})
export class TotcostosvariablesComponent implements OnInit {
  totalSumaCostosVariables: number = 0;
  listaCostosVariables: CostoVariable[] = []; // Esta es la nueva propiedad

  constructor(private scostosService: ScostosService) { }

  ngOnInit(): void {
    this.cargarSumaCostosVariables();
   
  }

  cargarSumaCostosVariables(): void {
    this.scostosService.getcostovariable().subscribe({
      next: (CostoVariable) => {
        this.listaCostosVariables = CostoVariable.map(CostoVariable => {
          // Crear una instancia de Date
          const fecha = new Date(CostoVariable.fechacostovariable);
          
          // Verificar si la fecha es válida
          if (isNaN(fecha.getTime())) {
            // Manejar la fecha inválida, por ejemplo, usando una fecha por defecto o lanzando un error
            console.error('Fecha inválida para el costo fijo:', CostoVariable);
            // Puede asignar una fecha por defecto o simplemente dejar la propiedad en blanco o null
            CostoVariable.fechacostovariable = ''; // o puedes usar null o una fecha por defecto
          } else {
            // Convertir la fecha válida a string ISO y recortar la hora
            CostoVariable.fechacostovariable = fecha.toISOString().split('T')[0];
          }
          
          return CostoVariable;
        });
  
        this.totalSumaCostosVariables = this.listaCostosVariables.reduce((suma, actual) => suma + actual.monto, 0);
      },
      error: (error) => {
        console.error('Error al obtener costos fijos', error);
      }
    });
  }}