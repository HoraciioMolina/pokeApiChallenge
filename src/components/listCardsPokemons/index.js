import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { loadGetAllPokemons } from "../../store/pokemon/pokemonActions";
import Input from "../UI/input";
import Pagination from "../UI/pagination";
import SmallPokemonCard from "../UI/smallPokemonCard";

const CardListPokemons = (props) => {
  const { onLoadAllPokemons, pokemons, count } = props;
  const history = useHistory();
  const [searchState, setSearchState] = useState("");
  const [paginationState, setPaginationState] = useState({
    elements: 0,
    page: 0,
    limit: 20,
    offset: 0,
  });

  useEffect(() => {
    onLoadAllPokemons(paginationState.limit, paginationState.offset);
  }, [onLoadAllPokemons, paginationState]);

  const onViewPokemonDetailsClick = (id) => {
    return history.push("/pokemonDetails", { pokemonId: id });
  };

  const onChangePageClick = (e, newPage) => {
    setPaginationState({
      ...paginationState,
      page: newPage,
      offset: paginationState.limit * newPage,
    });
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
                imageUrl={pokemon.sprites.front_default}
                name={pokemon.name}
                id={pokemon.id}
                onClick={(pokemonId) => onViewPokemonDetailsClick(pokemonId)}
              />
            );
          })}
      </div>
      <div className="list-cards-pokemons-container-paging">
        <Pagination
          count={count}
          page={paginationState.page}
          onChangePage={(e, newPage) => {
            onChangePageClick(e, newPage);
          }}
          rowsPerPage={paginationState.limit}
          onChangeRowsPerPage={(e) =>
            setPaginationState({
              ...paginationState,
              limit: parseInt(e.target.value, 10),
            })
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonReducer.allPokemons.pokemons,
    count: state.pokemonReducer.allPokemons.count,
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
