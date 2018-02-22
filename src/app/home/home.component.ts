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
      path: 'Instalação',
      fullRoute: '/instalacao',
      description: 'Início',
    },
    {
      path: 'Validações',
      fullRoute: '/validacoes',
      description: 'Json API'
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
      description: 'Internacionalização'
    },
    {
      path: 'Manipulação DOM',
      fullRoute: '/manipulacao-dom',
      description: 'Manipulação DOM'
    },
    {
      path: 'Json API',
      fullRoute: '/json-api',
      description: 'Json API'
    },
    {
      path: 'Form Builder',
      fullRoute: '/form-builder',
      description: 'Form Builder'
    },
    {
      path: 'Moment Js',
      fullRoute: '/moment-js',
      description: 'Biblioteca para parse de datas'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
