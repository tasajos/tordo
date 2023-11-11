import { Component } from '@angular/core';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.css']
})
export class CostosComponent {
  mostrarCostosOperacionales: boolean = false;

  toggleCostosOperacionales() {
    this.mostrarCostosOperacionales = !this.mostrarCostosOperacionales;
  }


  navegarAcontabilidad(): void {

    window.open('/contabilidad', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
  
  }
}
