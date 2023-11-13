import { Component, OnInit } from '@angular/core';
import { ScostosService } from '../../../../../Services/servcostos/scostos.service';
import { CostoFijo } from '../../../../../Interfaz/costos'; // Asegúrate de que la ruta es correcta


@Component({
  selector: 'app-totcostosfijos',
  templateUrl: './totcostosfijos.component.html',
  styleUrls: ['./totcostosfijos.component.css']
})
export class TotcostosfijosComponent implements OnInit {
  totalSumaCostosFijos: number = 0;
  listaCostosFijos: CostoFijo[] = []; // Esta es la nueva propiedad

  constructor(private scostosService: ScostosService) { }

  ngOnInit(): void {
    this.cargarSumaCostosFijos();
   
  }

  cargarSumaCostosFijos(): void {
    this.scostosService.getcostofijo().subscribe({
      next: (costosFijos) => {
        this.listaCostosFijos = costosFijos.map(costoFijo => {
          // Crear una instancia de Date
          const fecha = new Date(costoFijo.fechacostofijo);
          
          // Verificar si la fecha es válida
          if (isNaN(fecha.getTime())) {
            // Manejar la fecha inválida, por ejemplo, usando una fecha por defecto o lanzando un error
            console.error('Fecha inválida para el costo fijo:', costoFijo);
            // Puede asignar una fecha por defecto o simplemente dejar la propiedad en blanco o null
            costoFijo.fechacostofijo = ''; // o puedes usar null o una fecha por defecto
          } else {
            // Convertir la fecha válida a string ISO y recortar la hora
            costoFijo.fechacostofijo = fecha.toISOString().split('T')[0];
          }
          
          return costoFijo;
        });
  
        this.totalSumaCostosFijos = this.listaCostosFijos.reduce((suma, actual) => suma + actual.monto, 0);
      },
      error: (error) => {
        console.error('Error al obtener costos fijos', error);
      }
    });
  }}