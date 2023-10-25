import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { VentaPasajeticketInter  } from 'src/app/Interfaz/usuario';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.css']
})
export class ManifestoComponent {

mostrarTabla: boolean = false;
pasajeros: VentaPasajeticketInter[] = [];

constructor(private listadopasajeros: SusuarioService) {}

mostrarResultado() {
  this.mostrarTabla = true;
}
ngOnInit() {
  this.listadopasajeros.getpasajerosventa().subscribe(
    data => {
      this.pasajeros = data;
    },
    error => {
      console.log('Error:', error);
    }
  );
}

}