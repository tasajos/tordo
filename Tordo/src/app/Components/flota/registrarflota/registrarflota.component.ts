import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SflotaService } from 'src/app/Services/sflota.service';
import { HttpClient } from '@angular/common/http';
import { registrarflotaInter  } from 'src/app/Interfaz/flota';
import { ActivatedRoute, Router } from '@angular/router';

declare var bootstrap: any; // Para acceder a los métodos de Bootstrap

@Component({
  selector: 'app-registrarflota',
  templateUrl: './registrarflota.component.html',
  styleUrls: ['./registrarflota.component.css']
})
export class RegistrarflotaComponent implements OnInit {
  formulario: FormGroup;
 
  today!: string;  // Usa el operador "!" aquí
  twoWeeksLater!: string;  // Y aquí también
 
  
  constructor(
    private fb: FormBuilder,
   
    private _rregistro: SflotaService,
    private router: Router,
    //private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute,
    private routes: Router
  ) {
    this.formulario = this.fb.group({
      placa: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required],
      conductor: ['', Validators.required],
      cantidadpasajeros: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      estado: ['', Validators.required],
      precio: ['', Validators.required],
      fecharegistro: ['', Validators.required],
      
         });
  }

  registrarflota() {
     
      const rcactivo: registrarflotaInter = {
       
        placa: this.formulario.value.placa,
        hora: this.formulario.value.hora,
        tipo: this.formulario.value.tipo,
        conductor: this.formulario.value.conductor,
        cantidadpasajeros: this.formulario.value.cantidadpasajeros,
        origen: this.formulario.value.origen,
        destino: this.formulario.value.destino,
        estado: this.formulario.value.estado,
        precio: this.formulario.value.precio,
        fecharegistro: this.formulario.value.fecharegistro,
       
      };
  
      // Enviamos objeto al backend
      this._rregistro.addflota(rcactivo).subscribe(() => {
        this.showSuccessAlert(); 
        //this.mensajeExito('registrado');
        setTimeout(() => {
          location.reload();
        }, 2000); // Wait for 2 seconds before reloading the page
      });
   // });
}
showSuccessAlert(): void {
  const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
  }
   

  ngOnInit(): void {
    this.calculateDates();
}

calculateDates(): void {
  const currentDate = new Date();
  this.today = this.formatDate(currentDate);

  const twoWeeksFromNow = new Date(currentDate);
  twoWeeksFromNow.setDate(currentDate.getDate() + 14);
  this.twoWeeksLater = this.formatDate(twoWeeksFromNow);
}

formatDate(date: Date): string {
  let day: string = date.getDate().toString().padStart(2, '0');
  let month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  let year: string = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
}
volver() {
  // Redirige al usuario a la página principal
  this.routes.navigateByUrl('/verflota');
}
}


