import {
  PokemonService
} from '@/API/services'

const actions = {
  SET_POKEMON_LIST: 'pokedex/setPokemonList',
  SET_POKEMON: 'pokedex/setPokemon'
}

export default {
  state: {
    pokemonList: null,
    pokemon: null
  },
  actions: {
    getAllPokemons() {
      return PokemonService.getAllPokemons()
        .then(({data}) => {
          return data.results.map((item, index) => {
            const pokemon = item
            pokemon.id = index + 1
            return pokemon
          })
        })
        .catch(error => {
          console.log('error: ', error)
          return []
        })
    },
    setPokemonList({ commit }, pokemonList){
      commit(actions.SET_POKEMON_LIST, pokemonList)
    },
    getPokemon(_, param) {
      return PokemonService.getPokemon(param)
        .then(({data}) => data)
        .catch(error => {
          console.log('error: ', error)
          return null
        })
    },
    setPokemon({ commit }, pokemon) {
      commit(actions.SET_POKEMON, pokemon)
    }
  },
  mutations: {
    [actions.SET_POKEMON_LIST] (state, pokemonList) {
      state.pokemonList = pokemonList
    },
    [actions.SET_POKEMON] (state, pokemon) {
      state.pokemon = pokemon
    }
  },
  getters: {
    storePokemonList: ({ pokemonList }) => pokemonList,
    storePokemon: ({ pokemon }) => pokemon
  }
}