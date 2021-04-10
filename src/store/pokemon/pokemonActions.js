import * as actionTypes from "./pokemonConstants";
import * as pokemonServices from "../../services/pokemon/pokemonServices";

const loadGetAllPokemons = (limit, offset) => {
  return (dispatch) => {
    dispatch(loadGetAllPokemonsStart());
    pokemonServices.getAll(
      limit,
      offset,
      (response) => {
        dispatch(loadGetAllPokemonsSuccess(response.data.results));
      },
      (error) => {
        dispatch(loadGetAllPokemonsFail(error));
      }
    );
  };
};

const loadGetAllPokemonsStart = () => {
  return {
    type: actionTypes.GET_ALL_POKEMONS_START,
  };
};

const loadGetAllPokemonsSuccess = (pokemons) => {
  return {
    type: actionTypes.GET_ALL_POKEMONS_SUCCESS,
    pokemons,
  };
};

const loadGetAllPokemonsFail = (error) => {
  return {
    type: actionTypes.GET_ALL_POKEMONS_FAIL,
    error,
  };
};

const loadGetPokemonById = (pokemonId) => {
  return (dispatch) => {
    dispatch(loadGetPokemonByIdStart());

    pokemonServices.getbyId(
      pokemonId,
      (response) => {
        const { id, name, weight, height, types, abilities } = response.data;
        const imageUrl = response.data.sprites.front_default;

        const formatResponse = {
          id,
          name,
          imageUrl,
          weight,
          height,
          types: types.map((type) => type.type.name),
          abilities: abilities.map((ability) => ability.ability.name),
        };

        dispatch(loadGetPokemonByIdSuccess(formatResponse));
      },
      (error) => {
        dispatch(loadGetPokemonByIdFail(error));
      }
    );
  };
};

const loadGetPokemonByIdStart = () => {
  return {
    type: actionTypes.GET_POKEMON_BY_ID_START,
  };
};

const loadGetPokemonByIdSuccess = (pokemon) => {
  return {
    type: actionTypes.GET_POKEMON_BY_ID_SUCCESS,
    pokemon,
  };
};

const loadGetPokemonByIdFail = (error) => {
  return {
    type: actionTypes.GET_POKEMON_BY_ID_FAIL,
    error,
  };
};

export { loadGetAllPokemons, loadGetPokemonById };
