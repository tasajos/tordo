import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo, Pasivo,Estructura } from '../../../Interfaz/cuentas';


@Component({
  selector: 'app-cpasivo',
  templateUrl: './cpasivo.component.html',
  styleUrls: ['./cpasivo.component.css']
})
export class CpasivoComponent implements OnInit {

  pasivoForm!: FormGroup; // Asegúrate de que esta propiedad esté aquí

  showSuccessAlert = false;
  categoriasPasivos: Estructura[] = [];
  
  constructor(private fb: FormBuilder, private cuentasService: ServcuentasccService) {}

  ngOnInit(): void {
    this.pasivoForm = this.fb.group({
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: [null, Validators.required],
      fechaIncidencia: [null, Validators.required],
      fechaVencimiento: [null, Validators.required]
    });

  
      this.obtenerCategoriasPasivos();
    
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

  obtenerCategoriasPasivos(): void {
    this.cuentasService.obtenerEstructuras().subscribe(
      (estructuras: any[]) => { // Reemplazar 'any' con la interfaz adecuada
        // Filtramos y aplanamos las estructuras que son de tipo "Activos"
        this.categoriasPasivos = estructuras
          .filter(e => e.tipo === 'Pasivos')
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