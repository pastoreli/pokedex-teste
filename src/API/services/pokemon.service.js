import {
  axios
} from '../config'

const url = 'pokemon'

export default {
  getAllPokemons: () => axios.get(`${url}?offset=0&limit=807`),
  getPokemon: param => axios.get(`${url}/${param}`)
}