import { states } from './data-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  states = states;
  // vamos adicionar o formControl em um formGroup
  // nome = new FormControl();

  cidadeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.cidadeForm = this.fb.group({
      name: ['', Validators.required],
      cidade: 'Garanhuns',
      estado: 'recife'
    })
  }

  ngOnInit() {
  }

}


