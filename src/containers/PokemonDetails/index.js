import React from "react";
import { withRouter } from "react-router";
import DetailCardPokemon from "../../components/detailCardPokemon";

const PokemonDetails = (props) => {
  return (
    <div className="pokemon-details-container">
      <DetailCardPokemon />
    </div>
  );
};

export default withRouter(PokemonDetails);
