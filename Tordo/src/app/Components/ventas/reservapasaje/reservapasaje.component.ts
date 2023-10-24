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
    nit: '',
    telefono: '',
    email: '',
    ci: '',
    precio: '',
    tipo: '',
    hora: '',
    placa: '',
    // ... otros campos
  };
  nombre: string = '';
  apellidos: string = '';
  origen: string = '';
  destino: string = '';
  nit: number | null = null; // Inicializa nit como null en lugar de 0
  telefono:  number | null = null; // Inicializa nit como null en lugar de 0
  email: string = '';
  ci: number | null = null; // Inicializa ci como null en lugar de 0
  precio:  number = 0;
  tipo: string = '';
  hora: string = '';
  placa: string = '';
  // ... otros campos

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.flota.asiento = this.route.snapshot.queryParamMap.get('asiento');
    this.flota.fecharegistro = this.route.snapshot.queryParamMap.get('fecha');
    this.flota.origen = this.route.snapshot.queryParamMap.get('origen');
    this.flota.destino = this.route.snapshot.queryParamMap.get('destino');
    //this.flota.precio = this.route.snapshot.queryParamMap.get('precio');
    this.flota.precio = this.route.snapshot.queryParamMap.get('precio');
    this.flota.tipo = this.route.snapshot.queryParamMap.get('tipo');
    this.flota.hora = this.route.snapshot.queryParamMap.get('hora');
    this.flota.placa = this.route.snapshot.queryParamMap.get('placa');
  }

  onSubmit(formData: any) {
    console.log('Datos del formulario:', formData);
    // Aquí puedes procesar los datos del formulario, como enviarlos a un backend
  }
}