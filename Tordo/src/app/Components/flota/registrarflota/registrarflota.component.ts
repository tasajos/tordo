import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SflotaService } from 'src/app/Services/sflota.service';
import { HttpClient } from '@angular/common/http';
import { registrarflotaInter  } from 'src/app/Interfaz/flota';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrarflota',
  templateUrl: './registrarflota.component.html',
  styleUrls: ['./registrarflota.component.css']
})
export class RegistrarflotaComponent implements OnInit {
  formulario: FormGroup;
  showAlert: boolean = false;
 
  closeAlert(): void {
    this.showAlert = false;
  }


  constructor(
    private fb: FormBuilder,
   
    private _rregistro: SflotaService,
    private router: Router,
    //private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute
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
  this.showAlert = true;
}
   

  ngOnInit(): void {

}



}


