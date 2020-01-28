<template>
  <div class="pok-details">
    <div v-if="pokemon">
      <div
        :class="[ 'pok-details-element-layer', pokemon.types[pokemon.types[1]? 1 : 0].type.name ]"
      ></div>
      <div class="text-center">
        <img :src="pokemon.sprites.front_default" width="200px" alt="pokemon" class="text-center" />
        <div class="fill-all pok-details-content">
          <h1 class="white--text text-center text--bold">{{ pokemon.name }}</h1>
          <h3 class="white--text text-center text--bold">{{ pokemon.id | convertPokedexId }}</h3>
          <div>
            <span
              v-for="item in pokemon.types"
              :key="item.slot"
              :class="[ 'py-6 px-16 mx-6', 'rounded', item.type.name ]"
            >{{ item.type.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="white--text text-center">Escolha um pokemon</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "./style";
</style>