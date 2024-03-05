import { Component } from '@angular/core';
import { FfservService } from '../../../Services/sfireserv/ffserv.service'; // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-guusuario',
  templateUrl: './guusuario.component.html',
  styleUrls: ['./guusuario.component.css']
})
export class GuusuarioComponent {
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  telefono: string = '';
  empresa: string = '';
  email: string = '';
  direccion: string = '';
  nivelPermiso: string = '';
  fechaNacimiento: string = '';
  carnetIdentidad: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private ffservService: FfservService) {}

  // Función para registrar un usuario
  registerUser() {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      telefono: this.telefono,
      empresa: this.empresa,
      email: this.email,
      direccion: this.direccion,
      nivelPermiso: this.nivelPermiso,
      fechaNacimiento: this.fechaNacimiento,
      carnetIdentidad: this.carnetIdentidad,
      password: this.password
    };

    this.ffservService.registerUser(userData)
      .then(() => {
        console.log('Usuario registrado con éxito');
        // Realizar acciones adicionales después del registro exitoso
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        // Manejar errores de registro
      });
  }
}