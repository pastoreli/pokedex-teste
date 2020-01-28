<template>
  <div id="pokedex" class="d-flex fill-all pa-20">
    <div class="grey-lighten fill-all rounded d-flex pa-20">
      <div class="content-left grey-darken fill-height overflow-auto border-right">
        <pokemon-list :items="storePokemonList" @choose="findPokemonByName" />
      </div>
      <div class="content-right grey-darken fill-height overflow-auto">
        <pokemon-details :pokemon="storePokemon" />
      </div>
    </div>
  </div>
</template>

<script>

import {
  mapActions,
  mapGetters
} from 'vuex'

import {
  PokemonList
} from '@/components/lists'

import PokemonDetails from '@/components/PokemonDetails'

export default {
  components: {
    PokemonList,
    PokemonDetails
  },
  computed: {
    ...mapGetters([
      'storePokemonList',
      'storePokemon'
    ])
  },
  mounted () {
    this.loadPage()
  },
  methods: {
    ...mapActions([
      'getAllPokemons',
      'getPokemon',
      'setPokemonList',
      'setPokemon'
    ]),
    loadPage () {
      this.handlerPokemon()
    },
    async handlerPokemon () {
      const pokemonList = await this.getAllPokemons()
      this.setPokemonList(pokemonList)
    },
    async findPokemonByName (name) {
      const pokemon = await this.getPokemon(name)
      this.setPokemon(pokemon)
    }
  }
}
</script>