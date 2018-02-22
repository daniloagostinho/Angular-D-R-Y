import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  valorAtualizado = 'Tecnlogia padrão: HTML 5';
  constructor() { }

  ngOnInit() {

  }

  tecAtual() {
    console.log(this.valorAtualizado);
  }

  adicionaTecs(tecAdicionada: string) {
    this.valorAtualizado = tecAdicionada;
    
  }
 
}
