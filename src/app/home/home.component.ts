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
      fullRoute: '/',
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
    },
    {
      path: 'Gráficos',
      fullRoute: '/graficos',
      description: 'Modais'
    },
    {
      path: 'Internacionalização',
      fullRoute: '/internacionalizacao',
      description: 'Modais'
    },
    {
      path: 'Manipulação DOM',
      fullRoute: '/manipulacao-dom',
      description: 'Modais'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
