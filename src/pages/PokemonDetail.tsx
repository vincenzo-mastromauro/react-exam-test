import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonDetail } from "../models/pokemon-model";
import { PokemonService } from "../services/pokemon-service";

const PokemonDetail = () => {
  const pokemonService = new PokemonService();
  const { pokemonName } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail | null>(null);

  useEffect(() => {
    const handlePokemonDetail = async () => {
      const response = await pokemonService.getSinglePokemon(pokemonName ?? "");
      setPokemonDetail(response);
    };
    handlePokemonDetail();
  }, [pokemonName]);

  const renderImage = pokemonDetail && (
    <img
      src={pokemonDetail.sprites.front_default}
      alt={pokemonDetail.name}
    />
  );

  return pokemonDetail ? (
    <div>
      {pokemonDetail.name}
      {renderImage}
    </div>
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
};

export default PokemonDetail;
