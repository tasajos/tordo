import { Component, OnInit } from '@angular/core';
import { SflotaService } from 'src/app/Services/sflota.service';
import { registrarflotaInter } from 'src/app/Interfaz/flota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarpasajero',
  templateUrl: './registrarpasajero.component.html',
  styleUrls: ['./registrarpasajero.component.css']
})
export class RegistrarpasajeroComponent implements OnInit {
  flotas: registrarflotaInter[] = [];

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
    this.router.navigate(['/pasajeros-tabla', flota.cantidadpasajeros]);
  }

}