import { Component, OnInit } from '@angular/core';
import { FormatoService } from '../../../services/formato.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _formato: FormatoService,
              public auth: AuthService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this._formato.cambiarBusqueda(termino);
  }

}
