import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons.component';
// import { CadastroComponent } from '../cadastro/cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PokemonsRoutingModule { }
