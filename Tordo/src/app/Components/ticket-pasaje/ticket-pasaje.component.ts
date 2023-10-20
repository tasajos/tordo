import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { HttpClient } from '@angular/common/http';
import { RegistroUsuarioTicketInter  } from 'src/app/Interfaz/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-pasaje',
  templateUrl: './ticket-pasaje.component.html',
  styleUrls: ['./ticket-pasaje.component.css']
})
export class TicketPasajeComponent implements OnInit {
  formulario: FormGroup;
  showAlert: boolean = false;
 
  closeAlert(): void {
    this.showAlert = false;
  }


  constructor(
    private fb: FormBuilder,
   
    private _rregistro: SusuarioService,
    private router: Router,
    //private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      ext: ['', Validators.required],
      ci: ['', Validators.required],
      fechanacimiento: ['', Validators.required],
      nit: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      asiento: ['', Validators.required],
      metodopago: ['', Validators.required],
      
         });
  }

  registrarpasajero() {
     
      const rcactivo: RegistroUsuarioTicketInter = {
       
        nombre: this.formulario.value.nombre,
        apellidos: this.formulario.value.apellidos,
        ext: this.formulario.value.ext,
        ci: this.formulario.value.ci,
        fechanacimiento: this.formulario.value.fechanacimiento,
        nit: this.formulario.value.nit,
        origen: this.formulario.value.origen,
        destino: this.formulario.value.destino,
        asiento: this.formulario.value.asiento,
        metodopago: this.formulario.value.metodopago,
       
      };
  
      // Enviamos objeto al backend
      this._rregistro.addpasajeroti(rcactivo).subscribe(() => {
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


