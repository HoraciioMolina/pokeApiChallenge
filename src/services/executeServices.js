import axios from "axios";

const PATH = "https://pokeapi.co/api/v2/";

const executeService = async (url, method, data) => {
  const request = {
    method,
    url: `${PATH}${url}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data && method === "POST") {
    request.data = data;
  }

  if (data && method === "GET") {
    request.params = data;
  }

  return await axios(request).then((response) => {
    return response;
  });
};

export default executeService;
