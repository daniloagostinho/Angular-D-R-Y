import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MascarasComponent } from './mascaras/mascaras.component';
import { ModaisComponent } from './modais/modais.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

const routes: Routes = [
    {path: '', component: ConteudoComponent, pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'mascaras', component: MascarasComponent},
    {path: 'modais', component: ModaisComponent},
 ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}