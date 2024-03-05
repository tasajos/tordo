import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recuperarusuario',
  templateUrl: './recuperarusuario.component.html',
  styleUrls: ['./recuperarusuario.component.css']
})
export class RecuperarusuarioComponent {
  email: string = '';

  constructor(private afAuth: AngularFireAuth, private snackBar: MatSnackBar) {}

  recuperarCuenta(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón

    if (!this.email) {
      this.snackBar.open('Por favor ingresa tu correo electrónico', 'Cerrar', {
        duration: 5000,
      });
      return;
    }

    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        this.snackBar.open('Se ha enviado un correo electrónico para restablecer tu contraseña', 'Cerrar', {
          duration: 5000,
        });
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico', error);
        this.snackBar.open('Error al enviar el correo electrónico', 'Cerrar', {
          duration: 5000,
        });
      });
  }
}