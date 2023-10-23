import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservapasaje',
  templateUrl: './reservapasaje.component.html',
  styleUrls: ['./reservapasaje.component.css']
})
export class ReservapasajeComponent implements OnInit {

  flota: any = {
    asiento: null,
    fecharegistro: '',
    origen: '',
    destino: '',
    // ... otros campos
  };
  nombre: string = '';
  apellidos: string = '';
  origen: string = '';
  destino: string = '';
  // ... otros campos

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.flota.asiento = this.route.snapshot.queryParamMap.get('asiento');
    this.flota.fecharegistro = this.route.snapshot.queryParamMap.get('fecha');
    this.flota.origen = this.route.snapshot.queryParamMap.get('origen');
    this.flota.destino = this.route.snapshot.queryParamMap.get('destino');
  }

  onSubmit(formData: any) {
    console.log('Datos del formulario:', formData);
    // Aquí puedes procesar los datos del formulario, como enviarlos a un backend
  }
}