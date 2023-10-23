import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lrpasajeros',
  templateUrl: './lrpasajeros.component.html',
  styleUrls: ['./lrpasajeros.component.css']
})
export class LrpasajerosComponent implements OnInit {

  passengerCount: number = 0;
  flota: any;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const count = this.route.snapshot.paramMap.get('count');
    this.passengerCount = count ? +count : 0;
    
    // Leer los query params para obtener la información de la flota
    const origen = this.route.snapshot.queryParamMap.get('origen');
    const destino = this.route.snapshot.queryParamMap.get('destino');
    const hora = this.route.snapshot.queryParamMap.get('hora');
    const placa = this.route.snapshot.queryParamMap.get('placa');
    const fecharegistro = this.route.snapshot.queryParamMap.get('fecharegistro');


    this.flota = {
      origen: origen,
      destino: destino,
      hora: hora,
      placa: placa,
      fecharegistro: this.formatDate(fecharegistro || '')
    };
  } 

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 porque los meses van de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
}  