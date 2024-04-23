export class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  species: { name: string, url: string };
  sprites: any;
  stats: Poderes[];
  types: any[];
  results: PokemonResult[];

  constructor() {
    this.id = 0;
    this.name = "";
    this.base_experience = 0;
    this.height = 0;
    this.is_default = true;
    this.order = 0;
    this.weight = 0;
    this.abilities = [];
    this.forms = [];
    this.game_indices = [];
    this.held_items = [];
    this.location_area_encounters = "";
    this.moves = [];
    this.species = { name: "", url: "" };
    this.sprites = {};
    this.stats = [];
    this.types = [];
    this.results = [];
  }
}

export class PokemonResult {
  name: string;
  url: string;
  forca: number;

  constructor(name: string, url: string, forca: number) {
    this.name = name;
    this.url = url;
    this.forca= forca
  }
}

export class Poderes {
  base_stat: number;
  effort: string;

  constructor(base_stat: number, effort: string) {
    this.base_stat = base_stat;
    this.effort = effort;
  }
}
