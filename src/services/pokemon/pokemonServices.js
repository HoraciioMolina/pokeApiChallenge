import axios from "axios";
import executeService from "../executeServices";
import * as endPoints from "./pokemonEndPoints";

const getAll = (limit, offset, success, error) => {
  const pokemons = [];
  let count = 0;

  executeService(
    endPoints.GET_ALL.replace(":limit", limit).replace(":offset", offset),
    "GET"
  )
    .then((res) => {
      count = res.data.count;
      return res.data.results;
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)));
    })
    .then((results) => {
      results.map((res) => pokemons.push(res.data));
      return success({ pokemons, count });
    })
    .catch(error);
};

const getbyId = (id, success, error) => {
  executeService(endPoints.GET_BY_ID.replace(":id", id), "GET")
    .then(success)
    .catch(error);
};

export { getAll, getbyId };
