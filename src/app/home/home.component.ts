import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //menus = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  menus = [  
    {
      path: 'home',
      fullRoute: '/home',
      description: 'Início',
    },
    {
      path: 'Mascaras',
      fullRoute: '/mascaras',
      description: 'Mascaras'
    },
    {
      path: 'Modais',
      fullRoute: '/modais',
      description: 'Modais'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
