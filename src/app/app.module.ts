import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { MascarasComponent } from './mascaras/mascaras.component';
import { ModaisComponent } from './modais/modais.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { GraficosComponent } from './graficos/graficos.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { ManipulacaoDomComponent } from './manipulacao-dom/manipulacao-dom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MascarasComponent,
    ModaisComponent,
    ConteudoComponent,
    GraficosComponent,
    InternacionalizacaoComponent,
    ManipulacaoDomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
