import { Component } from '@angular/core';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { EstructuraDto } from '../../../Interfaz/cuentas'; 

@Component({
  selector: 'app-mtto',
  templateUrl: './mtto.component.html',
  styleUrls: ['./mtto.component.css']
})
export class MttoComponent {

  showSuccessAlert = false;
  estructura: EstructuraDto = {
    tipo: 'Activos', // Inicializado como 'Activos', cambia según la selección del usuario
    niveles: 5, // Se inicializa con 5 niveles, ajustar según sea necesario
    subniveles: [] // Se inicializa un array vacío para subniveles
   
  };

  constructor(private cuentasService: ServcuentasccService) {}

  registrar(): void {
    // Aquí se podría incluir lógica para validar la estructura antes de enviar
    this.cuentasService.crearEstructura(this.estructura).subscribe(
      response => {
        console.log(response);
        this.showSuccessAlert = true; // Mostrar la alerta
        setTimeout(() => this.showSuccessAlert = false, 3000); // Ocultar después de 3 segundos
        //this.pasivoForm.reset(); // Limpiar el formulario
        // Aquí puedes poner lógica adicional después de la respuesta exitosa
      },
      error => {
        console.error(error);
        // Aquí puedes manejar errores, como mostrar un mensaje al usuario
      }
    );
  }

  actualizarSubniveles(nivel: number, subniveles: string): void {
    // Asegurarse de que el arreglo tenga el tamaño adecuado
    while (this.estructura.subniveles.length < nivel) {
      this.estructura.subniveles.push(0);
    }
    // Actualizar el número de subniveles para el nivel específico
    this.estructura.subniveles[nivel - 1] = parseInt(subniveles) || 0;
  }

  seleccionarTipo(tipo: string): void {
    this.estructura.tipo = tipo;
  }
  handleInputChange(event: Event, nivel: number): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.actualizarSubniveles(nivel, input.value);
    }

}}