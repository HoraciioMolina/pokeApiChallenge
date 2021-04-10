import executeService from "../executeServices";
import * as endPoints from "./pokemonEndPoints";

const getAll = (limit, offset, success, error) => {
  executeService(
    endPoints.GET_ALL.replace(":limit", limit).replace(":offset", offset),
    "GET"
  )
    .then(success)
    .catch(error);
};

const getbyId = (id, success, error) => {
  executeService(endPoints.GET_BY_ID.replace(":id", id), "GET")
    .then(success)
    .catch(error);
};

export { getAll, getbyId };
