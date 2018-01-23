import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manipulacao-dom',
  templateUrl: './manipulacao-dom.component.html',
  styleUrls: ['./manipulacao-dom.component.css']
})
export class ManipulacaoDomComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { } 

  ngOnInit() {
  }

}
