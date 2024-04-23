import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url_consulta = "https://pokeapi.co/api/v2/pokemon/?limit=151"

  constructor(private http: HttpClient) { }

  public listaPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url_consulta)
  }
  public getPokemonPorId(rota: string): Observable<Pokemon> {
    const url = rota
    return this.http.get<Pokemon>(url);
  }
}
