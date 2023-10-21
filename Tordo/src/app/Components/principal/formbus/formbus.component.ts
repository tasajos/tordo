import { Component, OnInit } from '@angular/core';
import { SflotaService } from 'src/app/Services/sflota.service';
import { registrarflotaInter } from 'src/app/Interfaz/flota';


@Component({
  selector: 'app-formbus',
  templateUrl: './formbus.component.html',
  styleUrls: ['./formbus.component.css']
})
export class FormbusComponent   implements OnInit {
  mostrarTabla: boolean = false;
  registrosFlota: registrarflotaInter[] = [];

  constructor(private verFlota: SflotaService) {}

  ngOnInit(): void {
    this.verFlota.getflota().subscribe(data => {
      this.registrosFlota = data; // Almacena los datos en la variable
    });
  }
  mostrarResultado() {
    this.mostrarTabla = true;
  }

}
