import { Component } from '@angular/core';

@Component({
  selector: 'app-ventapasaje',
  templateUrl: './ventapasaje.component.html',
  styleUrls: ['./ventapasaje.component.css']
})
export class VentapasajeComponent {

  mostrarVdiarias: boolean = false;
  mostrarcpasajeros: boolean = false;
  mostrarNovedades: boolean = false;
  mostrarCostos: boolean = false;


  mostrarComponente(componente: string) {
    // Primero establecemos todos los componentes en falso.
    this.mostrarVdiarias = false;
    this.mostrarcpasajeros = false;
    this.mostrarNovedades = false;
    this.mostrarCostos = false;

    // Luego activamos el componente específico que se quiere mostrar.
    switch (componente) {
      case 'vdiarias':
        this.mostrarVdiarias = true;
        break;
      case 'cpasajeros':
        this.mostrarcpasajeros = true;
        break;
      case 'novedades':
        this.mostrarNovedades = true;
        break;
      case 'costos':
        this.mostrarCostos = true;
        break;
        
      default:
        // No hacer nada o manejar cualquier caso que no sea esperado
        break;
    }
  }
}
