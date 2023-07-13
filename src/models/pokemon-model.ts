export interface IPokemonResponse {
  next: string;
  previous: string;
  results: IPokemon[];
}
export interface IPokemon {
  name: string;
  url: string;
}
export type IPokemonDetail = {
  abilities: {
    ability: IPokemon;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: IPokemon[];
  game_indices: {
    game_index: number;
    version: IPokemon;
  }[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: IPokemon;
    move_learn_method: IPokemon;
    version_group: IPokemon;
  };
  name: string;
  order: number;
  past_types: [];
  species: IPokemon;
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    other: {
      dream_world: SpritesType;
      home: SpritesType;
    };
  };
  stats: { base_stat: number; effort: number; stat: IPokemon }[];
  types: { slot: number; type: IPokemon };
  weight: number;
};
type SpritesType = {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
};
