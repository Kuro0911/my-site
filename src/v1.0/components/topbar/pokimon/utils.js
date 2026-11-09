import axios from "axios";

export const serverUrl = `https://pokeapi.co/api/v2/pokemon/`;

export let api = axios.create({
  baseURL: serverUrl,
});

export const getData = (poki) => {
  const request = api.get(poki);
  return request;
};
