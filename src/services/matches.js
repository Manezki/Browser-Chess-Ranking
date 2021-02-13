import axios from 'axios';

const baseUrl = "http://localhost:3001/matches"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request
    .then( (response) => response.data )
}

const add = (match) => {
  console.log(match);
  const request = axios.post(baseUrl, match)
  return request
    .then( (response) => response.data )
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export { getAll, add }
