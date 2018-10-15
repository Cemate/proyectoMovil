import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormatoService } from './formato.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router, private _formato: FormatoService) { }

  sendToken(token: string) {
    if (token === 'agente' || token === 'sindico') {
      localStorage.setItem('LoggedInUser', token);
      this._formato.oficina = token;
      this.myRoute.navigate(['/home']);
      return 'logeado';
    } else if (token === 'admin') {
      localStorage.setItem('LoggedInUser', token);
      this._formato.oficina = '';
      this.myRoute.navigate(['/home']);
      return 'logeado';
    } else {
      return 'Error de usuario o contraseña';
    }
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['/login']);
  }
}
