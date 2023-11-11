import { Component, OnInit } from '@angular/core';
import { ScostosService } from '../../../../Services/servcostos/scostos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listascop',
  templateUrl: './listascop.component.html',
  styleUrls: ['./listascop.component.css']
})
export class ListascopComponent implements OnInit {
  cantidadCostosFijos: number = 0;
  cantidadCostosVariables: number = 0;

  constructor(private scostosService: ScostosService,
    private router: Router) { }

  ngOnInit(): void {
    this.recargarDatos();
  }

  recargarDatos(): void {
    // Suponiendo que esta función simula una operación de carga o inicialización.
    // Puedes realizar aquí la operación necesaria y luego llamar a las funciones de obtención de costos.
    // Simulo una operación asincrónica usando setTimeout como ejemplo.
    setTimeout(() => {
      this.obtenerCostosFijos();
      this.obtenerCostosVariables();
    }, 1000); // Suponiendo que la recarga tarda 1 segundo.
  }

  obtenerCostosFijos(): void {
    this.scostosService.getcostofijo().subscribe({
      next: (costosFijos) => {
        this.cantidadCostosFijos = costosFijos.length;
      },
      error: (error) => {
        // Aquí puedes manejar el error, por ejemplo, mostrando una notificación.
        console.error('Error al obtener costos fijos', error);
      }
    });
  }

  obtenerCostosVariables(): void {
    this.scostosService.getcostovariable().subscribe({
      next: (costosVariables) => {
        this.cantidadCostosVariables = costosVariables.length;
      },
      error: (error) => {
        // Aquí puedes manejar el error, por ejemplo, mostrando una notificación.
        console.error('Error al obtener costos variables', error);
      }
    });
  }
  navegarACostosFijos(): void {
    // Navega a la ruta deseada, por ejemplo 'costos-fijos'
    //this.router.navigate(['/tcostofijo']); // Asegúrate de que esta ruta está configurada en tu módulo de enrutamiento
    window.open('/tcostofijo', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=600');

}

navegarACostosVariables(): void {

  window.open('/tcostovariable', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=600');

}}