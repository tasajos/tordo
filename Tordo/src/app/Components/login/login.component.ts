import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup; //variable para el formulario

  constructor(
    private fb: FormBuilder,
    private afauth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login() {

    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    //console.log(email,password);

    this.afauth
    .signInWithEmailAndPassword(email, password)
    .then((usuario) => {
      console.log(usuario);
  
      // Verifica si usuario y usuario.user existen antes de acceder a uid
      if (usuario && usuario.user) {
        this.db.object(`/users/${usuario.user.uid}/role`).valueChanges().subscribe(role => {
          if (role === "admin") {
            this.router.navigate(['/uadministrador']); 
            //this.router.navigate(['/admin-dashboard']); 
          }           
          else if (role === "superusuario"){
            this.router.navigate(['/usuperusuario']);
          }
          else  {
            this.router.navigate(['/uvendedor']);
          }

        });
      } else {
        console.error('No se pudo obtener el usuario de Firebase');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
}
