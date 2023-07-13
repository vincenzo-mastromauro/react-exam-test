import { BaseService } from "../api/base-service";
import { IPokemonResponse } from "../models/pokemon-model";

export class PokemonService extends BaseService {
  async getPokemons(): Promise<IPokemonResponse> {
    const endpoint = "pokemon";
    console.time(`getPokemons ${endpoint}`);
    const response = await this.get<IPokemonResponse>(`${endpoint}?limit=1000`, 0);
    console.timeEnd(`getPokemons ${endpoint}`);
    return response;
  }

  async getSinglePokemon(pokemonName: string | "ditto"): Promise<IPokemonResponse> {
    const endpoint = `pokemon/${pokemonName}`;
    console.time(`getSinglePokemon ${endpoint}`);
    const response = await this.get<IPokemonResponse>(endpoint, 0);
    console.timeEnd(`getSinglePokemon ${endpoint}`);
    return response;
  }
}
