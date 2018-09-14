import { Component, OnInit } from '@angular/core';
import { FormatoService } from '../../services/formato.service';
import { Formato } from './../../interfaces/formato.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  formatos: Formato[];

  constructor(private _formato: FormatoService,
              private router: Router) {
  }

  ngOnInit() {
    this.formatos = this._formato.getFormatos();
  }

  escogerFormato(id: number) {
    this.router.navigate( ['/formato', id] );
  }

}
