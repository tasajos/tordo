import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo, Pasivo,Estructura,Patrimonio,Ingreso } from '../../../Interfaz/cuentas';


@Component({
  selector: 'app-cingresos',
  templateUrl: './cingresos.component.html',
  styleUrls: ['./cingresos.component.css']
})
export class CingresosComponent implements OnInit {

  ingresoForm!: FormGroup; // Asegúrate de que esta propiedad esté aquí

  showSuccessAlert = false;
  categoriasIngresos: Estructura[] = [];
  
  constructor(private fb: FormBuilder, private cuentasService: ServcuentasccService) {}

  ngOnInit(): void {
    this.ingresoForm = this.fb.group({
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: [null, Validators.required],
      fechaRegistro: [null, Validators.required],
      fuente: [null, Validators.required],
      cuentaRelacionadaId: [null, Validators.required],
      
    });

  
      this.obtenerCategoriasIngresos();
    
  }

  onSubmitIngreso(): void { // Asegúrate de que este método esté definido
    if (this.ingresoForm.valid) {
      this.cuentasService.createIngreso(this.ingresoForm.value as Ingreso).subscribe(
        result => {
          console.log(result);
          this.showSuccessAlert = true; // Mostrar la alerta
          setTimeout(() => this.showSuccessAlert = false, 3000); // Ocultar después de 3 segundos
          this.ingresoForm.reset(); // Limpiar el formulario
          // Manejo de la respuesta
        },
        error => {
          // Manejo del error
        }
      );
    }
  }

  obtenerCategoriasIngresos(): void {
    this.cuentasService.obtenerEstructuras().subscribe(
      (estructuras: any[]) => { // Reemplazar 'any' con la interfaz adecuada
        // Filtramos y aplanamos las estructuras que son de tipo "Activos"
        this.categoriasIngresos = estructuras
          .filter(e => e.tipo === 'Ingresos')
          .flatMap(e => [e, ...(e.subniveles || [])]); // Aplanamos los niveles con los subniveles
      },
      error => {
        console.error('Error al obtener las estructuras', error);
      }
    );
  }

  private aplanarEstructuras(estructuras: Estructura[]): Estructura[] {
    const aplanadas: Estructura[] = [];
  
    estructuras.forEach(estructura => {
      aplanadas.push({
        id: estructura.id,
        nombre: estructura.nombre,
        tipo: estructura.tipo,
        nivel: estructura.nivel
      });
  
      if (estructura.subniveles && estructura.subniveles.length > 0) {
        estructura.subniveles.forEach(subnivel => {
          aplanadas.push({
            id: subnivel.id,
            nombre: subnivel.nombre,
            tipo: estructura.tipo, // Asumiendo que los subniveles heredan el tipo del nivel principal
            nivel: estructura.nivel // Otra opción es tener un identificador de subnivel si es necesario
          });
        });
      }
    });
  
    return aplanadas;
  }



}