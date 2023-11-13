import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo, Estructura } from '../../../Interfaz/cuentas';

@Component({
  selector: 'app-cactivos',
  templateUrl: './cactivos.component.html',
  styleUrls: ['./cactivos.component.css']
})
export class CactivosComponent implements OnInit {
  activoForm: FormGroup;
  showSuccessAlert = false;
  categoriasActivos: Estructura[] = [];

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
    this.obtenerCategoriasActivos();
  }

  obtenerCategoriasActivos(): void {
    this.cuentasService.obtenerEstructuras().subscribe(
      (estructuras: any[]) => { // Reemplazar 'any' con la interfaz adecuada
        // Filtramos y aplanamos las estructuras que son de tipo "Activos"
        this.categoriasActivos = estructuras
          .filter(e => e.tipo === 'Activos')
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




  onSubmit(): void {
    if (this.activoForm.valid) {
      const activo: Activo = this.activoForm.value;
      this.cuentasService.createActivo(activo).subscribe(
        result => {
          console.log(result);
          this.showSuccessAlert = true;
          setTimeout(() => this.showSuccessAlert = false, 3000);
          this.activoForm.reset();
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
