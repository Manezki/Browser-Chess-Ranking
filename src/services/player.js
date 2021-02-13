import axios from 'axios';

const baseUrl = "http://localhost:3001/players"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request
    .then( (response) => response.data )
}

const update = (name, updatedPlayerState) => {
  const updateURL = `${baseUrl}/${name}`
  const request = axios.put(updateURL, updatedPlayerState)
  return request
    .then( (response) => {
      return response.data
    })
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export { getAll, update }
