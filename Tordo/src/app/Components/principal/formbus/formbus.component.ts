import { Component } from '@angular/core';

@Component({
  selector: 'app-formbus',
  templateUrl: './formbus.component.html',
  styleUrls: ['./formbus.component.css']
})
export class FormbusComponent {
  mostrarTabla: boolean = false;


  mostrarResultado() {
    this.mostrarTabla = true;
  }

}
