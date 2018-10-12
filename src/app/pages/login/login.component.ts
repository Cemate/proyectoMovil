import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  mensaje = '';
  constructor(private fb: FormBuilder,
              private myRouter: Router,
              private auth: AuthService) {
                this.form = fb.group({
                  username: ['', [Validators.required]],
                  password: ['', Validators.required]
                });
               }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.mensaje = this.auth.sendToken(this.form.value.username);
      // this.myRouter.navigate(['/home']);
      console.log('Yeesss...');
    }
  }

}
