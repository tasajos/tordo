import { Component } from '@angular/core';

@Component({
  selector: 'app-menu2slider',
  templateUrl: './menu2slider.component.html',
  styleUrls: ['./menu2slider.component.css']
})
export class Menu2sliderComponent {

  mostrarempresas: boolean = false;
  mostrarusuarios: boolean = false;
  mostrarreportes: boolean = false;
  mostrarnovedades: boolean = false;
  
  mostrarComponente(componente: string) {
    // Primero establecemos todos los componentes en falso.
    this.mostrarempresas = false;
    this.mostrarusuarios = false;
    this.mostrarreportes = false;
    this.mostrarnovedades = false;
    

    // Luego activamos el componente específico que se quiere mostrar.
    switch (componente) {
      case 'vdiarias':
        this.mostrarempresas = true;
        break;
      case 'cpasajeros':
        this.mostrarusuarios = true;
        break;
      case 'novedades':
        this.mostrarreportes = true;
        break;
      case 'costos':
        this.mostrarnovedades = true;
        break;
        
  

      default:
        // No hacer nada o manejar cualquier caso que no sea esperado
        break;
    }
  }
}

