<template>
  <div id="pokedex" class="d-flex fill-all pa-20">
    <div class="grey-lighten fill-all rounded d-flex pa-20">
      <div class="content-left grey-darken fill-height overflow-auto">
        <pokemonList :items="storePokemonList" />
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
  pokemonList
} from '@/components/lists'

export default {
  components: {
    pokemonList
  },
  computed: {
    ...mapGetters([
      'storePokemonList'
    ])
  },
  mounted () {
    this.loadPage()
  },
  methods: {
    ...mapActions([
      'getAllPokemons',
      'setPokemonList'
    ]),
    loadPage () {
      this.handlerPokemon()
    },
    async handlerPokemon () {
      const pokemonList = await this.getAllPokemons()
      this.setPokemonList(pokemonList)
    }
  }
}
</script>