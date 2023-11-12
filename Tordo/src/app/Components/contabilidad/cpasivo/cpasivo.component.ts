import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo,Pasivo } from '../../../Interfaz/cuentas'; 

@Component({
  selector: 'app-cpasivo',
  templateUrl: './cpasivo.component.html',
  styleUrls: ['./cpasivo.component.css']
})
export class CpasivoComponent implements OnInit {

  pasivoForm!: FormGroup; // Asegúrate de que esta propiedad esté aquí

  showSuccessAlert = false;
  constructor(private fb: FormBuilder, private cuentasService: ServcuentasccService) {}

  ngOnInit(): void {
    this.pasivoForm = this.fb.group({
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: [null, Validators.required],
      fechaIncidencia: [null, Validators.required],
      fechaVencimiento: [null, Validators.required]
    });
  }

  onSubmit(): void { // Asegúrate de que este método esté definido
    if (this.pasivoForm.valid) {
      this.cuentasService.createPasivo(this.pasivoForm.value as Pasivo).subscribe(
        result => {
          console.log(result);
          this.showSuccessAlert = true; // Mostrar la alerta
          setTimeout(() => this.showSuccessAlert = false, 3000); // Ocultar después de 3 segundos
          this.pasivoForm.reset(); // Limpiar el formulario
          // Manejo de la respuesta
        },
        error => {
          // Manejo del error
        }
      );
    }
  }
}