import { Component, OnInit } from '@angular/core';

import { 
  FormControl, 
  FormGroup, 
  FormBuilder, 
  Validators
} from '@angular/forms';

@Component({  
  selector: 'app-input-form-group',
  templateUrl: './input-form-group.component.html',
  styleUrls: ['./input-form-group.component.css']
})
export class InputFormGroupComponent implements OnInit {

  nome = new FormControl();

  validacaoForm = new FormGroup({
    nome: new FormControl()
  })

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.validacaoForm = this.fb.group({
      nome: ['', Validators.required],
      rua: '',
      cidade: '',
      estado: '',
      cep: ''
    })
  }

  ngOnInit() {
    console.log(this.nome);
  }
  

}
