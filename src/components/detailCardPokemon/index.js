import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { formatThreeIntegerDigits } from "../../assets/shared/formatsNumber";
import { loadGetPokemonById } from "../../store/pokemon/pokemonActions";
import BigPokemonCard from "../UI/bigPokemonCard";
import Button from "../UI/button/button";
import PokeballLoader from "../UI/pokeballLoader";

const DetailCardPokemon = (props) => {
  const { onLoadPokemonById, pokemon, loading } = props;
  const history = useHistory();
  const historyState = history.location.state;

  useEffect(() => {
    if (historyState) {
      onLoadPokemonById(historyState.pokemonId);
    }
  }, [onLoadPokemonById, historyState]);

  const previusId = pokemon.id - 1;
  const getPrevius = () => {
    return onLoadPokemonById(previusId);
  };

  const nextId = pokemon.id + 1;
  const getNext = () => {
    return onLoadPokemonById(nextId);
  };

  return (
    <div className="detail-card-pokemon-container">
      {loading ? (
        <PokeballLoader />
      ) : (
        <div className="detail-card-pokemon-container-controls">
          <Button onClick={() => getPrevius()}>
            <div className="detail-card-pokemon-container-controls-button-text">
              {`#${formatThreeIntegerDigits(previusId)}`}
            </div>
          </Button>
          <BigPokemonCard pokemonDetail={pokemon} />
          <Button onClick={() => getNext()}>
            <div className="detail-card-pokemon-container-controls-button-text">
              {`#${formatThreeIntegerDigits(nextId)}`}
            </div>
          </Button>
        </div>
      )}
      <div className="detail-card-pokemon-container-button-volver">
        <Button onClick={() => history.goBack()}>Volver</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonReducer.pokemonById.pokemon,
    loading: state.pokemonReducer.pokemonById.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPokemonById: (pokemonId) => dispatch(loadGetPokemonById(pokemonId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCardPokemon);
