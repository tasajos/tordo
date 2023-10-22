import { Component, OnInit } from '@angular/core';
import { SflotaService } from 'src/app/Services/sflota.service';
import { registrarflotaInter } from 'src/app/Interfaz/flota';

@Component({
  selector: 'app-formbus',
  templateUrl: './formbus.component.html',
  styleUrls: ['./formbus.component.css']
})
export class FormbusComponent implements OnInit {
  mostrarTabla: boolean = false;
  registrosFlota: registrarflotaInter[] = [];
  origen: string = '';
  destino: string = '';
  mostrarModal: boolean = false;

  constructor(private verFlota: SflotaService, private buscarFlotaService: SflotaService) {}

  ngOnInit(): void {
    this.verFlota.getflota().subscribe(data => {
      this.registrosFlota = data;
    });
  }

  buscarPorOrigenYDestino() {
    if (this.origen && this.destino) {
      this.buscarFlotaService.buscarFlota(this.origen, this.destino)
        .subscribe(data => {
          // Verifica si la respuesta tiene la propiedad "Mensaje"
          if (data.mensaje) {
            // Aquí puedes mostrar el modal o una alerta
            alert(data.mensaje);
            this.mostrarModal = true;
          } else {
            this.registrosFlota = data;
            this.mostrarTabla = data.length > 0;
            this.mostrarModal = false; 
          }
        }, error => {
          alert('Error al realizar la búsqueda.');
        });
    } else {
      alert('Por favor, seleccione un origen y un destino.');
    }
  }
  
  
}
