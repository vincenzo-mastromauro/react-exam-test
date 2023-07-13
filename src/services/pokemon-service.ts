import { BaseService } from "../api/base-service";
import { IPokemonResponse } from "../models/pokemon-model";

export class PokemonService extends BaseService {
  async getPokemons(): Promise<IPokemonResponse> {
    const endpoint = "pokemon";
    const timerId = `getPokemons ${endpoint}`;
    console.time(timerId);
    console.timeEnd(timerId);
    return await this.get<IPokemonResponse>(endpoint + "?limit=1000");
  }

  async getSinglePokemon(pokemonName: string | "ditto"): Promise<IPokemonResponse> {
    const endpoint = "pokemon/";
    const timerId = `getSinglePokemon ${endpoint}${pokemonName}`;
    console.time(timerId);
    console.timeEnd(timerId);
    return await this.get<IPokemonResponse>(endpoint + pokemonName);
  }
}
