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
  origen: string = '';
  destino: string = '';

  constructor(private verFlota: SflotaService,
    private buscarFlotaService: SflotaService
    ) {}

  ngOnInit(): void {
    this.verFlota.getflota().subscribe(data => {
      this.registrosFlota = data; // Almacena los datos en la variable
    });
  }
  mostrarResultado() {
    this.mostrarTabla = true;
  }

  buscarPorOrigenYDestino() {
    console.log('Origen:', this.origen);
    console.log('Destino:', this.destino);
  
    if (this.origen && this.destino) {
      this.buscarFlotaService.buscarFlotaPorOrigenYDestino(this.origen, this.destino)
        .subscribe(
          (data: registrarflotaInter[]) => {
            this.registrosFlota = data;
            this.mostrarTabla = true;
            console.log('Datos recibidos:', data);
          },
          (error) => {
            console.error('Error al buscar flota:', error);
            // Manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario.
          }
        );
    } else {
      alert('Por favor, seleccione un origen y un destino.');
    }
  }
  
  
}
  


