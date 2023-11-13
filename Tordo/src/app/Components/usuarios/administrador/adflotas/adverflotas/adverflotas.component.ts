import { Component, OnInit } from '@angular/core';
import { SflotaService } from 'src/app/Services/sflota.service';
import { registrarflotaInter } from 'src/app/Interfaz/flota';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


interface Bus {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-adverflotas',
  templateUrl: './adverflotas.component.html',
  styleUrls: ['./adverflotas.component.css']
})
export class AdverflotasComponent implements OnInit {

  allFlotas: registrarflotaInter[] = []; 
  flotas: registrarflotaInter[] = [];
  selectedValue: string = 'Hoy';

  selectedCar!: string;

  Buss: Bus[] = [
    {value: 'Hoy', viewValue: 'Hoy'},
    {value: 'Fechas Anteriores', viewValue: 'Fechas Anteriores'},
    {value: 'Fechas Futuras', viewValue: 'Fechas Futuras'},
  ];

  constructor(private flotaService: SflotaService,private router: Router) {}

  ngOnInit(): void {
    this.flotaService.getflota().subscribe(
      (data) => {
        this.allFlotas = data;
        this.filterFlotasBasedOnDate(); // <-- Llama al filtro inmediatamente después de obtener todos los datos
      },
      (error) => {
        console.error('Error al obtener flota:', error);
      }
    );
  }

  showPassengerTable(flota: registrarflotaInter): void {
    this.router.navigate(['/lpasajeros-tabla', flota.cantidadpasajeros], {
      queryParams: {
        origen: flota.origen,
        destino: flota.destino,
        hora: flota.hora,
        placa: flota.placa,
        fecharegistro: flota.fecharegistro,
        precio: flota.precio,
        tipo: flota.tipo
      }
    });



}
formatDate(dateOrString: Date | string): string {
  let date: Date;
  if (typeof dateOrString === 'string') {
    date = new Date(dateOrString);
  } else {
    date = dateOrString;
  }
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

normalizeDate(date: Date): Date {
  date.setHours(0, 0, 0, 0);
  return date;
}

filterFlotasBasedOnDate() {
  const currentDate = this.normalizeDate(new Date());
  
  if (this.selectedValue === 'Fechas Anteriores') {
    this.flotas = this.allFlotas.filter(flota => this.normalizeDate(new Date(flota.fecharegistro)) < currentDate);
  } else if (this.selectedValue === 'Fechas Futuras') {
    this.flotas = this.allFlotas.filter(flota => this.normalizeDate(new Date(flota.fecharegistro)) > currentDate);
  } else if (this.selectedValue === 'Hoy') {
    this.flotas = this.allFlotas.filter(flota => {
      const flotaDate = this.normalizeDate(new Date(flota.fecharegistro));
      return flotaDate.getTime() === currentDate.getTime();
    });
  } else {
    this.flotas = this.allFlotas;
  }
}
}