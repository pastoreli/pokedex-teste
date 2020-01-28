<template>
  <div v-if="items" class="pok-list">
    <div class="fill-width grey-darken">
      <p-text-field v-model="search" placeholder="Pesquisar pokemon" class="px-10" />
    </div>
    <div
      v-for="item in filterPokemons"
      :key="item.id"
      class="pok-list-item border-bottom cursor-pointer"
      @click="$emit('choose', item.name)"
    >
      <div class="pok-list-item-image py-4 px-8">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`"
          alt="pokemon"
          width="60px"
        />
      </div>
      <div class="pok-list-item-text white--text py-14">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>

import {
  searchMethods
} from '@/helpers'

export default {
  name: 'pokemon-list',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filterPokemons () {
      return searchMethods.sequentialSearch(this.items, this.search, 'name')
    }
  },
  data: () => ({
    search: ''
  })
}
</script>

<style lang="scss">
@import "./style";
</style>