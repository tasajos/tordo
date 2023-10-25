import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-reservapasaje',
  templateUrl: './reservapasaje.component.html',
  styleUrls: ['./reservapasaje.component.css']
})
export class ReservapasajeComponent implements OnInit {

  registroExitoso: boolean = false;

  
  flota: any = {
    asiento: null,
    fecha: '',
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
    fechanacimiento: '',
    metodopago: '',
    // ... otros campos
  };
  nombre: string = '';
  apellidos: string = '';
  fecha: string = '';
  origen: string = '';
  destino: string = '';
  nit: string = '';
  telefono:  string = '';
  email: string = '';
  ci: number | null = null; // Inicializa ci como null en lugar de 0
  precio:  number = 0;
  tipo: string = '';
  hora: string = '';
  placa: string = '';
  fechanacimiento: Date| null = null;
  metodopago: string = '';
  estado: string = '';
  // ... otros campos

  constructor(private route: ActivatedRoute, private rtServicio: SusuarioService) {}


  ngOnInit(): void {
    this.flota.asiento = this.route.snapshot.queryParamMap.get('asiento');
    this.flota.fecha = this.route.snapshot.queryParamMap.get('fecha');
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


    const pasajero = {
      asiento: this.flota.asiento,
      fecha: this.flota.fecha, // Asegúrate de proporcionar un valor para fecha
      nombre: this.nombre,
      apellidos: this.apellidos,
      nit: this.nit,
      ci: this.ci || 0,
      precio: this.flota.precio,
      preciocalculado: 0, // Asegúrate de proporcionar un valor para preciocalculado
      tipo: this.flota.tipo,
      telefono: this.telefono, // Convierte a cadena
      email: this.email,
      origen: this.flota.origen,
      destino: this.flota.destino,
      hora: this.flota.hora,
      placa: this.flota.placa,
      fechanacimiento: this.fechanacimiento|| null,
      metodopago: this.metodopago,
      estado: this.estado
      // ... otros campos
    };

 // Después de un registro exitoso
 this.registroExitoso = true;
    // Aquí puedes procesar los datos del formulario, como enviarlos a un backend

    this.rtServicio.postaddpasajero(pasajero).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        // Realiza cualquier otra acción que desees después de registrar los datos
      },
      (error) => {
        console.error('Error al registrar:', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
     
  }

  openModal() {
    if (this.metodopago === 'qr') {
      // Abre el modal "QR"
      const modalQR = document.getElementById('staticBackdropQR');
      if (modalQR) {
        const bsModal = new bootstrap.Modal(modalQR);
        bsModal.show();
      }
    } else if (this.metodopago === 'efectivo') {
      // Abre el modal "Efectivo"
      const modalEfectivo = document.getElementById('staticBackdropefectivo');
      if (modalEfectivo) {
        const bsModal = new bootstrap.Modal(modalEfectivo);
        bsModal.show();
      }
    }
  }
  
}