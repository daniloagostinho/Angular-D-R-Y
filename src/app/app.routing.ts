import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MascarasComponent } from './mascaras/mascaras.component';
import { ModaisComponent } from './modais/modais.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { GraficosComponent } from './graficos/graficos.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { ManipulacaoDomComponent } from './manipulacao-dom/manipulacao-dom.component';
import { JsonApiComponent } from './json-api/json-api.component';
import { IntroComponent } from './intro/intro.component';
import { InstalacaoComponent } from './instalacao/instalacao.component';
import { ValidacoesFormComponent } from './validacoes-form/validacoes-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'mascaras', component: MascarasComponent},
    {path: 'modais', component: ModaisComponent},
    {path: 'graficos', component: GraficosComponent},
    {path: 'internacionalizacao', component: InternacionalizacaoComponent},
    {path: 'manipulacao-dom', component: ManipulacaoDomComponent},
    {path: 'json-api', component: JsonApiComponent},
    {path: 'intro', component: IntroComponent},
    {path: 'instalacao', component: InstalacaoComponent},
    {path: 'validacoes', component: ValidacoesFormComponent},
    {path: 'form-builder', component: FormBuilderComponent}
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
