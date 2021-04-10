import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { loadGetAllPokemons } from "../../store/pokemon/pokemonActions";
import Input from "../UI/input";
import SmallPokemonCard from "../UI/smallPokemonCard";

const CardListPokemons = (props) => {
  const { onLoadAllPokemons, pokemons } = props;
  const history = useHistory();
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    onLoadAllPokemons();
  }, [onLoadAllPokemons]);

  const onViewPokemonDetailsClick = (id) => {
    return history.push("/pokemonDetails", { pokemonId: id + 1 });
  };

  return (
    <div className="list-cards-pokemons-container">
      <div className="list-cards-pokemons-container-search">
        <Input
          name="searchPokemon"
          value={searchState}
          placeholder="Buscar Pokemon"
          onChangeValue={(e) => setSearchState(e.target.value)}
        />
      </div>
      <div className="list-cards-pokemons-container-body">
        {pokemons
          .filter((pok) => pok.name.toLowerCase().includes(searchState))
          .map((pokemon, index) => {
            return (
              <SmallPokemonCard
                key={index}
                url={pokemon.url}
                name={pokemon.name}
                id={index}
                href=""
                onClick={(pokemonId) => onViewPokemonDetailsClick(pokemonId)}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonReducer.allPokemons.pokemons,
    loading: state.pokemonReducer.allPokemons.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadAllPokemons: (limit, offset) =>
      dispatch(loadGetAllPokemons(limit, offset)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CardListPokemons)
);
