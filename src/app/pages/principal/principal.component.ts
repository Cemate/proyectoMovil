import { FormatosComponent } from './formatos/formatos.component';
import { BuscadorInzquierdoComponent } from './../shared/buscador-inzquierdo/buscador-inzquierdo.component';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  config = false;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }
}
