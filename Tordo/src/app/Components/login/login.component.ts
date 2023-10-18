import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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

    console.log(email,password);

    this.afauth
      .signInWithEmailAndPassword(email, password)
      .then((usuario) => {
        console.log(usuario);
        this.router.navigate(['/uvendedor']);
      })
      .catch((error) => {
        console.log(error);
      });


  }
}
