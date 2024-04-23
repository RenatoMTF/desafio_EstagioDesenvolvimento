import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module=> module.HomeModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemons/pokemons.module').then(module =>module.PokemonModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
