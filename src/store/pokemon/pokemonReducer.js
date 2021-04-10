import { updateObject } from "../utilities";
import * as actionTypes from "./pokemonConstants";

const intialState = {
  allPokemons: {
    loading: false,
    error: null,
    pokemons: [],
    count: 0,
  },
  pokemonById: {
    loading: false,
    error: null,
    pokemon: {
      id: "",
      imageUrl: "",
      name: "",
      height: 0,
      weight: 0,
      types: [],
      abilities: [],
    },
  },
};

//#region load get pokemon by id
const loadGetPokemonByIdStart = (state) => {
  return updateObject(state, {
    pokemonById: updateObject(state.pokemonById, {
      loading: true,
    }),
  });
};

const loadGetPokemonByIdSuccess = (state, pokemon) => {
  return updateObject(state, {
    pokemonById: updateObject(state.pokemonById, {
      loading: false,
      pokemon,
    }),
  });
};

const loadGetPokemonByIdFail = (state, error) => {
  return updateObject(state, {
    pokemonById: updateObject(state.pokemonById, {
      loading: false,
      error,
    }),
  });
};
//#endregion

//#region load get all pokemons
const loadGetAllPokemonsStart = (state) => {
  return updateObject(state, {
    allPokemons: updateObject(state.allPokemons, {
      loading: true,
      error: null,
      pokemons: [],
    }),
  });
};

const loadGetAllPokemonsSuccess = (state, pokemons, count) => {
  return updateObject(state, {
    allPokemons: updateObject(state.allPokemons, {
      loading: false,
      pokemons,
      count,
    }),
  });
};

const loadGetAllPokemonsFail = (state, error) => {
  return updateObject(state, {
    allPokemons: updateObject(state.allPokemons, {
      loading: false,
      loaded: true,
      error,
    }),
  });
};
//#endregion

const pokemonReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMON_BY_ID_START:
      return loadGetPokemonByIdStart(state);
    case actionTypes.GET_POKEMON_BY_ID_SUCCESS:
      return loadGetPokemonByIdSuccess(state, action.pokemon);
    case actionTypes.GET_POKEMON_BY_ID_FAIL:
      return loadGetPokemonByIdFail(state, action.error);

    case actionTypes.GET_ALL_POKEMONS_START:
      return loadGetAllPokemonsStart(state);
    case actionTypes.GET_ALL_POKEMONS_SUCCESS:
      return loadGetAllPokemonsSuccess(state, action.pokemons, action.count);
    case actionTypes.GET_ALL_POKEMONS_FAIL:
      return loadGetAllPokemonsFail(state, action.error);

    default:
      return state;
  }
};

export default pokemonReducer;
