import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { SflotaService } from 'src/app/Services/sflota.service';
import { registrarflotaInter } from 'src/app/Interfaz/flota';
import { Modal } from 'bootstrap'; // <-- Importa Bootstrap

@Component({
  selector: 'app-formbus',
  templateUrl: './formbus.component.html',
  styleUrls: ['./formbus.component.css']
})
export class FormbusComponent implements OnInit, AfterViewInit {
  mostrarTabla: boolean = false;
  registrosFlota: registrarflotaInter[] = [];
  origen: string = '';
  destino: string = '';
  mostrarModal: boolean = false ;

  @ViewChild('modalNoResultados') modalNoResultados!: ElementRef;

  private bsModal!: Modal; // Instancia del modal de Bootstrap
  constructor(private verFlota: SflotaService, private buscarFlotaService: SflotaService) {}



  ngOnInit(): void {
    this.verFlota.getflota().subscribe(data => {
      this.registrosFlota = data;
    });
    
  }

  ngAfterViewInit(): void { // <-- Añade esta función
    this.bsModal = new Modal(this.modalNoResultados.nativeElement);
  }

  buscarPorOrigenYDestino() {
    if (this.origen && this.destino) {
      this.buscarFlotaService.buscarFlota(this.origen, this.destino)
        .subscribe(data => {
          // Verifica si la respuesta tiene la propiedad "mensaje"
          if (data.mensaje) {
            // Muestra el modal de Bootstrap
            this.bsModal.show();
          } else {
            this.registrosFlota = data;
            this.mostrarTabla = data.length > 0;
          }
        }, error => {
          alert('Error al realizar la búsqueda.');
        });
    } else {
      alert('Por favor, seleccione un origen y un destino.');
    }
  }
}
