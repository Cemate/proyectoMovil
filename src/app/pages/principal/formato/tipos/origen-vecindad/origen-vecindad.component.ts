import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-origen-vecindad',
  templateUrl: './origen-vecindad.component.html',
  styleUrls: ['./origen-vecindad.component.css']
})
export class OrigenVecindadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      // $("button").click(function(){
      //     var div = $("div");
      //     div.animate({left: '100px'}, "slow");
      //     div.animate({fontSize: '5em'}, "slow");
      // });
      $(function() { $('textarea').froalaEditor(); });
    });
  }

}
