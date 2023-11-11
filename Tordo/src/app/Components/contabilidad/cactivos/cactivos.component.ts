import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo } from '../../../Interfaz/cuentas'; 

@Component({
  selector: 'app-cactivos',
  templateUrl: './cactivos.component.html',
  styleUrls: ['./cactivos.component.css']
})
export class CactivosComponent implements OnInit {


  activoForm: FormGroup;
  showSuccessAlert = false;

  constructor(private fb: FormBuilder, private cuentasService: ServcuentasccService) {
    this.activoForm = this.fb.group({
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: [null, Validators.required],
      fechaAdquisicion: [null, Validators.required],
      fechaValoracion: [null],
      vidaUtilEstimada: [null]
    });
  }

  ngOnInit(): void {
    this.activoForm = this.fb.group({
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: [null, Validators.required],
      fechaAdquisicion: [null, Validators.required],
      fechaValoracion: [null],
      vidaUtilEstimada: [null]
    });
  }

  onSubmit(): void {
    if (this.activoForm.valid) {
      this.cuentasService.createActivo(this.activoForm.value as Activo).subscribe(
        result => {
          console.log(result);
          this.showSuccessAlert = true; // Mostrar la alerta
          setTimeout(() => this.showSuccessAlert = false, 3000); // Ocultar después de 3 segundos
          this.activoForm.reset(); // Limpiar el formulario
        },
        error => {
          console.error(error);
          // Manejo del error
        }
      );
    }
  }
}
