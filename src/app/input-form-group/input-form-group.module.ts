import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { InputFormGroupComponent } from './input-form-group.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  declarations: [
    InputFormGroupComponent
  ],
  exports: [ InputFormGroupComponent ]
})
export class InputFormGroupModule { }