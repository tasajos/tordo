import { Component, OnInit } from '@angular/core';
import { SflotaService } from 'src/app/Services/sflota.service';
import { registrarflotaInter } from 'src/app/Interfaz/flota';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-registrarpasajero',
  templateUrl: './registrarpasajero.component.html',
  styleUrls: ['./registrarpasajero.component.css']
})
export class RegistrarpasajeroComponent implements OnInit {


  flotas: registrarflotaInter[] = [];
  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    {value: 'Fechas Anteriores', viewValue: 'Fechas Anteriores'},
    {value: 'Fechas Futuras', viewValue: 'Fechas Futuras'},
      ];

  

  constructor(private flotaService: SflotaService,private router: Router) {}

  ngOnInit(): void {
    this.flotaService.getflota().subscribe(
      (data) => {
        this.flotas = data;
      },
      (error) => {
        console.error('Error al obtener flota:', error);
      }
    );
  }
  showPassengerTable(flota: registrarflotaInter): void {
    this.router.navigate(['/pasajeros-tabla', flota.cantidadpasajeros], {
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

}

