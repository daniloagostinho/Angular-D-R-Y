import { InputFormGroupModule } from './input-form-group/input-form-group.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { MascarasComponent } from './mascaras/mascaras.component';
import { ModaisComponent } from './modais/modais.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { GraficosComponent } from './graficos/graficos.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { ManipulacaoDomComponent } from './manipulacao-dom/manipulacao-dom.component';
import { JsonApiComponent } from './json-api/json-api.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { InstalacaoComponent } from './instalacao/instalacao.component';
import { ValidacoesFormComponent } from './validacoes-form/validacoes-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MascarasComponent,
    ModaisComponent,
    ConteudoComponent,
    GraficosComponent,
    InternacionalizacaoComponent,
    ManipulacaoDomComponent,
    JsonApiComponent,
    IntroComponent,
    HeaderComponent,
    InstalacaoComponent,
    ValidacoesFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputFormGroupModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
