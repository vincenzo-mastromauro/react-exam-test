import { useMemo, useEffect, useState } from "react";
import { IPokemon } from "../models/pokemon-model";
import { PokemonService } from "../services/pokemon-service";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

function PokemonList() {
  const pokemonService = new PokemonService();

  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const memoizedPokemon = useMemo(() => pokemonService.getPokemons(), []);

  const handlePokemon = async () => {
    setLoading(true);
    try {
      const response = await memoizedPokemon;
      setPokemons(response.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handlePokemon();
  }, [memoizedPokemon]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && pokemons.length === 0 && <p>No data found</p>}
      {!loading && pokemons.length > 0 && (
        <>
          <h1>Pokemon List</h1>
          {/* <ul>
            {pokemons.map((pokemon) => (
              <Card
                key={pokemon.name}
                className='w-auto'>
                <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
              </Card>
            ))}
          </ul> */}
          <DataView
            value={pokemons}
            layout='grid'
            paginator
            rows={20}
            itemTemplate={(pokemon: IPokemon) => (
              <Card key={pokemon.name}>
                <Link
                  className='text-xl text-blue-500 hover:text-blue-700 capitalize'
                  to={`/${pokemon.name}`}>
                  {pokemon.name}
                </Link>
              </Card>
            )}
          />
        </>
      )}
    </>
  );
}

export default PokemonList;
