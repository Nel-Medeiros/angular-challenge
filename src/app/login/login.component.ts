import { AuthService } from './../auth/auth.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { };

  ngOnInit(): void {

  };

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn && this.form.valid) {
        console.log('Usuário logado com sucesso.');
        this.router.navigate(["users"]);
      }
    });
  };

  @Input() email: string | boolean;
}
