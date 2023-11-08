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
}
