import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonsComponent } from './pokemons.component';
import { PokemonsRoutingModule } from './pokemons-routing.modules';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [PokemonsComponent],
  imports: [
    DialogModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    PokemonsRoutingModule,
  ]
})
export class PokemonModule { }
