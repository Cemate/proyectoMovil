import { Component, OnInit, Input } from '@angular/core';
import { FormatoService } from '../../../services/formato.service';
import { Formato } from '../../../interfaces/formato.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.css']
})
export class FormatosComponent implements OnInit {
  formatos: Formato[];
  termino: string;

  constructor(public _formato: FormatoService,
              private router: Router) { }

  ngOnInit() {
    this.formatos = this._formato.getFormatos();
    this.termino = this._formato.busqueda;
  }

  escogerFormato(id: number) {
    this.router.navigate( ['/home/formato', id] );
    this._formato.id = id;
  }

}
