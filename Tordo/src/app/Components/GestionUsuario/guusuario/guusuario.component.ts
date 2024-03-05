import { Component } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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
  carnetIdentidad: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private snackBar: MatSnackBar
  ) {}


registerUser() {
  if (!this.nombre || !this.apellidoPaterno || !this.apellidoMaterno || !this.telefono || !this.empresa || !this.email || !this.direccion || !this.nivelPermiso || !this.carnetIdentidad || !this.password || !this.confirmPassword) {
    this.snackBar.open('Todos los campos son obligatorios', 'Cerrar', { duration: 3000 });
    return;
  }

  // Verifica que las contraseñas coincidan
  if (this.password !== this.confirmPassword) {
    this.snackBar.open('Las contraseñas no coinciden', 'Cerrar', { duration: 3000 });
    return;
  }

  // Verifica que la contraseña tenga al menos 6 caracteres
  if (this.password.length < 6) {
    this.snackBar.open('La contraseña debe tener al menos 6 caracteres', 'Cerrar', { duration: 3000 });
    return;
  }
 
  
  

// Registrar usuario en Firebase Authentication
this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
.then(result => {
  if (result.user) {
  // Usuario registrado con éxito, ahora agrega a Realtime Database
  const uid = result.user.uid; // UID del usuario autenticado
  const userData = {
    nombre: this.nombre,
    apellidoPaterno: this.apellidoPaterno,
    apellidoMaterno: this.apellidoMaterno,
    telefono: this.telefono,
    empresa: this.empresa,
    email: this.email,
    direccion: this.direccion,
    nivelPermiso: this.nivelPermiso,
    carnetIdentidad: this.carnetIdentidad
    // No guardes la contraseña en la base de datos
  };
  return this.db.object(`/usuarios/${uid}`).set(userData);
} else {
  throw new Error('No user found after registration');
}
})
.then(() => {
  this.snackBar.open('Usuario registrado exitosamente', 'Cerrar', { duration: 3000 });
  this.clearForm();
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
    this.snackBar.open('El correo electrónico ya está en uso por otra cuenta', 'Cerrar', { duration: 3000 });
  } else {
    this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
  }
  console.error('Error al registrar el usuario:', error);
});

}



  clearForm() {
    this.nombre = '';
    this.apellidoPaterno = '';
    this.apellidoMaterno = '';
    this.telefono = '';
    this.empresa = '';
    this.email = '';
    this.direccion = '';
    this.nivelPermiso = '';
    this.carnetIdentidad = '';
    this.password = '';
    this.confirmPassword = '';
  }
}