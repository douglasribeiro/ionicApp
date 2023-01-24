import { AuthService } from './../../service/auth.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      console.log(resposta);
      this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['home'])
    }, () => {
      console.log('Usuário e/ou senha inválidos');
    })
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }

}
