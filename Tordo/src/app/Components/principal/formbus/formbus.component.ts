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
  fechaActual: Date = new Date();
fechaMaxima: Date = new Date(this.fechaActual);


  @ViewChild('modalNoResultados') modalNoResultados!: ElementRef;

  private bsModal!: Modal; // Instancia del modal de Bootstrap
  @ViewChild('modalOrigenDestino') modalOrigenDestino!: ElementRef;
private modalOD!: Modal;  // Instancia del nuevo modal

  constructor(private verFlota: SflotaService, private buscarFlotaService: SflotaService) {}



  ngOnInit(): void {
    this.fechaMaxima.setDate(this.fechaActual.getDate() + 14);
  
    this.verFlota.getflota().subscribe((data: registrarflotaInter[]) => {
      this.registrosFlota = data.filter((registro: registrarflotaInter) => {
        let fechaRegistro = new Date(registro.fecharegistro);
        return fechaRegistro >= this.fechaActual && fechaRegistro <= this.fechaMaxima;
      });
    });
  }
  

  ngAfterViewInit(): void { // <-- Añade esta función
    this.bsModal = new Modal(this.modalNoResultados.nativeElement);
    this.modalOD = new Modal(this.modalOrigenDestino.nativeElement);  // Inicialización del nuevo modal
  }
  buscarPorOrigenYDestino() {
    if (this.origen && this.destino) {
      this.buscarFlotaService.buscarFlota(this.origen, this.destino)
      .subscribe((data: registrarflotaInter[]) => {
        this.registrosFlota = data.filter((registro: registrarflotaInter) => {
          let fechaRegistro = new Date(registro.fecharegistro);
          return fechaRegistro >= this.fechaActual && fechaRegistro <= this.fechaMaxima;
        });
    
        this.mostrarTabla = this.registrosFlota.length > 0;
    
        if (!this.mostrarTabla) {
          this.bsModal.show();
        }
    
      }, error => {
        alert('Error al realizar la búsqueda.');
      });
}

}
formatDate(inputDate: string | Date): string {
  let date: Date;

  if (typeof inputDate === 'string') {
    date = new Date(inputDate);
  } else {
    date = inputDate;
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}/${month}/${day}`;
}

}