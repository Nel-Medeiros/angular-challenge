import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  isLogged: boolean;
  getLogged = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) { }

  ngOnInit(): void {
    // BLOCO A SER UTILIZADO PARA O SISTEMA DE EXIBIÇÃO CONDICIONAL DO BOTÃO DE LOGOUT
    // if (this.getLogged == true) {
    //   this.isLogged = true;
    //   console.log('usuário logado');
    // } else {
    //   this.isLogged = false;
    //   console.log('usuário não logado');
    // }
    // console.log(this.getLogged);
  }

  logOut() {
    this.authService.logout();
    //this.isLogged = false;
    //console.log(this.isLogged);
  }

}
