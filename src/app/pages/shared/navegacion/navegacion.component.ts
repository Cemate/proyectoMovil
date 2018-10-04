import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormatoService } from '../../../services/formato.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  formato: any;
  constructor( public _formato: FormatoService) {
  }

  ngOnInit() {
  }

}
