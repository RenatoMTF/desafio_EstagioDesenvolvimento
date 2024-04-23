import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'pokemon',
    component: PokemonsComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
