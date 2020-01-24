import {
  PokemonService
} from '@/API/services'

const actions = {
  SET_POKEMON_LIST: 'pokedex/serPokemonList'
}

export default {
  state: {
    pokemonList: null
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
    }
  },
  mutations: {
    [actions.SET_POKEMON_LIST] (state, pokemonList) {
      state.pokemonList = pokemonList
    }
  },
  getters: {
    storePokemonList: ({ pokemonList }) => pokemonList
  }
}