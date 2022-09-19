import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import  { NgForm } from '@angular/forms'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private apiUrl = 'https://reqres.in/api/login'

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
   }

    logIn(form: NgForm) {
      this.http.post<any>(this.apiUrl, {"email": form.value.email, "password": form.value.password}).subscribe((res) => {
        if(res.token) {
          this.router.navigate(['home']);
        }
      }, (error) => {
        alert("Usuario o contraseña incorrecta, intentelo de nuevo")
      })
    }

}
