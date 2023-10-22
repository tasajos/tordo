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
  @ViewChild('modalOrigenDestino') modalOrigenDestino!: ElementRef;
private modalOD!: Modal;  // Instancia del nuevo modal

  constructor(private verFlota: SflotaService, private buscarFlotaService: SflotaService) {}



  ngOnInit(): void {
    this.verFlota.getflota().subscribe(data => {
      this.registrosFlota = data;
    });
    
  }

  ngAfterViewInit(): void { // <-- Añade esta función
    this.bsModal = new Modal(this.modalNoResultados.nativeElement);
    this.modalOD = new Modal(this.modalOrigenDestino.nativeElement);  // Inicialización del nuevo modal
  }

  buscarPorOrigenYDestino() {
    if (this.origen && this.destino) {
      this.buscarFlotaService.buscarFlota(this.origen, this.destino)
        .subscribe(data => {
          if (data.mensaje) {
            this.bsModal.show();
          } else {
            this.registrosFlota = data;
            this.mostrarTabla = data.length > 0;
          }
        }, error => {
          alert('Error al realizar la búsqueda.');  // Podrías considerar convertir también este alert en un modal en el futuro.
        });
    } else {
      this.modalOD.show();  // Mostrar el modal en lugar del alert
    }
}
}
