import { Component, OnInit } from '@angular/core'
import { PokemonService } from '../pokemon.service'
import { Pokemon, PokemonResult } from '../Pokemon'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: PokemonResult[] = []
  filtroPokemons: PokemonResult[] = []
  termo: string = ''
  resultadoDialog: boolean=false
  textoVencedor:string= ''

  infoDialog:boolean=false
  name:string = ''
  order:number=0
  id:number=0
  height:number=0
  weight:number=0
  forca:number=0


  constructor(private pokemonService: PokemonService, private dialog: MatDialog) {}

  ngOnInit() {
    this.listapokemon()
    // this.carregarPokemonPorId()

  }


  // lista todos pokemons
  listapokemon() {
    this.pokemonService.listaPokemon().subscribe(
      response => {
        this.pokemons = response.results
        this.filtroPokemons = response.results
      },
      error => {
        alert("Houve algum erro ao carregar a lista")
      }
    )
  }

  //carrega as informacoes de um pokemon em especifico
  infoPokemon(rota: string ){
    this.forca = 0
    this.pokemonService.getPokemonPorId(rota).subscribe(
      (pokemon: Pokemon) => {
        this.id = pokemon.id
        this.order= pokemon.order
        this.name=pokemon.name
        this.height=pokemon.height
        this.weight=pokemon.weight
        pokemon.stats.forEach(stat => {
          this.forca += stat.base_stat // Soma cada base_stat
        })
      }
      )
      this.infoDialog = true
  }

  // carrega um pokemon e calcula sua forca pelos stats
   escolherPokemon(rota: string ) {

    this.pokemonService.getPokemonPorId(rota).subscribe(
      (pokemon: Pokemon) => {
        console.log(pokemon)
        var forca = 0
        pokemon.stats.forEach(stat => {
          forca += stat.base_stat // Soma cada base_stat
        })

        if (this.pokemons[pokemon.id-1]) {
          this.pokemons[pokemon.id-1].forca = forca
        }


        // alert('Força Total:'+ forca)
      },
      error => {
        alert("Erro ao carregar informações")
      }
    )

  }

  //faz a forca do pokemon ficar 0, ou seja, na pratica retira ele do combate
  removerPokemon(rota: string){
    this.pokemonService.getPokemonPorId(rota).subscribe(
    (pokemon: Pokemon) => {
      console.log(pokemon)
      var forca = 0

      if (this.pokemons[pokemon.id-1]) {
        this.pokemons[pokemon.id-1].forca = forca
        console.log(pokemon)
      }
    })
  }

  //realziza a comparacao da forca dos pokemons
  dueloDeForca(){

    let pokemonMaisForte = this.pokemons[0]

    // Percorre a lista de pokémons para encontrar o mais forte
    this.pokemons.forEach(pokemon => {
      if (pokemon.forca > pokemonMaisForte.forca) {
        pokemonMaisForte = pokemon
      }
    })

    if (pokemonMaisForte.forca == 0 || pokemonMaisForte.forca == null){
      this.textoVencedor = `Não houve duelo entre os pokemons`
    }
    else{
       this.textoVencedor = `O Pokémon vencedor do duelo é o ${pokemonMaisForte.name} com a força de ${pokemonMaisForte.forca} pontos.`// abrir a caixa de dialogo e mostrar o nome do pokemon mais forte
    }


    this.resultadoDialog=true

  }

  //funcao para escolha de pokemon
  filtrarPokemons() {
    this.filtroPokemons = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.termo.toLowerCase())
    )

  }
}
