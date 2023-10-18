import { Component } from '@angular/core';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.css']
})
export class ManifestoComponent {

mostrarTabla: boolean = false;


mostrarResultado() {
  this.mostrarTabla = true;
}
}