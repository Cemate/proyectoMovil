import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    if (token === 'agente'){
      localStorage.setItem('LoggedInUser', token);
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
