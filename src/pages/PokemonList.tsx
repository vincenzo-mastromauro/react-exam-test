import { useEffect, useState, useMemo } from "react";
import { IPokemon } from "../models/pokemon-model";
import { PokemonService } from "../services/pokemon-service";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";

function PokemonList() {
  const pokemonService = new PokemonService();

  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const memoizedPokemons = useMemo(() => pokemonService.getPokemons(), []);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await memoizedPokemons;
        setPokemons(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [memoizedPokemons]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {pokemons.length === 0 ? (
            <p>No data found</p>
          ) : (
            <>
              <h1>Pokemon List</h1>
              <DataView
                value={pokemons}
                layout='grid'
                paginator
                rows={20}
                itemTemplate={(pokemon: IPokemon) => (
                  <Card
                    key={pokemon.name}
                    className='m-8 w-max'>
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
      )}
    </>
  );
}

export default PokemonList;
